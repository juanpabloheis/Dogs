const express = require("express");
const { Temperament } = require("../db.js");
const axios = require('axios')

const router = express.Router();

// GET /temperament:
// Obtener todos los temperamentos posibles
// En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
router.get("/", async (req, res, next) => {
  try {
    let dbTemperaments = await Temperament.findAll({ attributes: ["name"] });

    if (!dbTemperaments.length)
      return res
        .status(404)
        .send("No se han encontrado temperamentos en la base de datos");

    let arrayTemperaments = dbTemperaments.map((e) => e.name);
    res.json(arrayTemperaments);
  } catch (e) {
    next(e);
  }
});

router.post("/preload", async (req, res, next) => {
  try {
    let apiTemperamentsPromise = await axios.get('https://api.thedogapi.com/v1/breeds');
    let apiTemperaments = apiTemperamentsPromise.data
    arrayTemperaments = apiTemperaments.reduce((acum, dog) => {
      return acum = acum.concat(dog.temperament)
    }, '');
    arrayTemperaments = arrayTemperaments.split(',');
    arrayTemperaments = arrayTemperaments.map(e => e.trim());

    arrayTemperaments.map(async temperaments => {
      await Temperament.findOrCreate({
        where: {
          name: temperaments
        },
      })
    })
  } catch (e) {
    next(e);
  }
});
module.exports = router;
