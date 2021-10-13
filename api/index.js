const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios')
require('dotenv').config();
const { DOMAIN_API } = process.env;


// Syncing all the models at once.
conn.sync({ force: true })
  .then(async () => {
    server.set("port", process.env.PORT || 3001);
    server.listen(server.get("port"), () => {
      console.log(`Server running on port ${server.get("port")}`); // eslint-disable-line no-console
    });
    try {
      await axios.post(DOMAIN_API + '/temperament/preload')
    } catch (err) {
      console.log(err)
    }
  });


