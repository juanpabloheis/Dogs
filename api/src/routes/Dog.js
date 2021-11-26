const express = require ('express')
const { v4: uuidv4 } = require('uuid');
const { Dog, Temperament } = require('../db.js');
const router = express.Router();

router.post('/', async (req, res, next) => {
    const { name, height, weight, life_span, temperaments } = req.body;
    console.log('req.body',req.body);
    try{
        const dogCreated = await Dog.findOrCreate({
            where:{name}, 
            defaults:{
                id: uuidv4(),
                name,
                height, 
                weight,
                life_span
            }
        })
        
        temperaments.forEach(async temp => {
            await dogCreated[0].addTemperaments(temp)
        })

        res.sendStatus(200)

    } catch(e){
        next(e);
        // res.sendStatus(500); // Status Code 500 (Internal Server Error) --> problema con el servidor
    }
})

module.exports = router;