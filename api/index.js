const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const preloadTemperaments = require('./src/utils/preloadTemperaments.js');

// Syncing all the models at once.
conn.sync({ force: true })
  .then(() => {
    let PORT = process.env.PORT || 3001
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`); // eslint-disable-line no-console
    });
    preloadTemperaments()
  });


