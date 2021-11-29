const express = require('express')
const axios = require('axios');
const { Dog, Temperament } = require('../db.js');
const { Op } = require('sequelize')

const router = express.Router();

// GET /dogs:
// Obtener un listado de las razas de perro
// Debe devolver solo los datos necesarios para la ruta principal

// GET /dogs?name="...":
// Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
// Si no existe ninguna raza de perro mostrar un mensaje adecuado

router.get('/', async (req, res, next) => {
    const { name } = req.query;
    try {
        let apiDogsPromise = await axios.get('https://api.thedogapi.com/v1/breeds');
        apiDogs = apiDogsPromise.data;

        if (name) {
            let dbDogs = await Dog.findAll({
                where: {
                    name: { [Op.iLike]: `${name}%` }
                },
                include: {
                    model: Temperament,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }
            });

            dbDogs = dbDogs.map(e => e.toJSON())
            dbDogs = dbDogs.map(e => {
                return {
                    id: e.id,
                    name: e.name,
                    image: e.image,
                    height: e.height,
                    weight: e.weight,
                    life_span: e.life_span,
                    temperament:  e.temperaments.map(t => t.name).join(', ')
                }
            }) 

            apiDogs = apiDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));
            if (!apiDogs.length) return res.status(404).send('No se ha encontrado la raza ingresada');

            let dogs = dbDogs.concat(apiDogs);
            res.json(dogs)
        }
        else {
            let dbDogs = await Dog.findAll({
                include: {
                    model: Temperament,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    }
                }
            });

            dbDogs = dbDogs.map(e => e.toJSON())
            dbDogs = dbDogs.map(e => {
                return {
                    id: e.id,
                    name: e.name,
                    image: e.image,
                    height: e.height,
                    weight: e.weight,
                    life_span: e.life_span,
                    temperament:  e.temperaments.map(t => t.name).join(', ')
                }
            }) 

            let dogs = dbDogs.concat(apiDogs);
            res.json(dogs)
        }
    } catch (e) {
        next(e)
    }
})

// GET /dogs/{idRaza}:
// Obtener el detalle de una raza de perro en particular
// Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
// Incluir los temperamentos asociados
router.get('/:idRaza', async (req, res, next) => {
    const { idRaza } = req.params;
    try {
        if (idRaza.length < 4) {
            let apiDogsPromise = await axios.get('https://api.thedogapi.com/v1/breeds');
            let apiDogs = apiDogsPromise.data;
            apiDogDetail = apiDogs.find(dog => dog.id == idRaza)
            res.json(apiDogDetail);
        } else {
            let dbDogDetail = await Dog.findByPk(idRaza)
            res.json(dbDogDetail)
        }
    }
    catch (e) {
        next(e)
    }
})

module.exports = router;