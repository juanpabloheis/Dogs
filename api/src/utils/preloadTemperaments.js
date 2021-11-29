const axios = require("axios");
const { Temperament } = require("../db.js");

async function preloadTemperaments() {
  try {
    let apiTemperamentsPromise = await axios.get(
      "https://api.thedogapi.com/v1/breeds"
    );
    let apiTemperaments = apiTemperamentsPromise.data;
    let arrayTemperaments = apiTemperaments.reduce((acum, dog) => {
      return (acum = acum.concat(dog.temperament && dog.temperament.replace(/ /g, "") + ","));
    }, "");
    arrayTemperaments = arrayTemperaments?.split(",");
    arrayTemperaments = arrayTemperaments.filter(temperament => temperament !== "");
    arrayTemperaments = [...new Set(arrayTemperaments.sort())];
    arrayTemperaments.map(async (temperaments) => {
      await Temperament?.findOrCreate({
        where: {
          name: temperaments && temperaments,
        },
      });
    });
  } catch (e) {
    console.log(e);
  }
}

module.exports = preloadTemperaments;