const { Router } = require('express');
// Importar todos los routers. Ejemplo: const authRouter = require('./auth.js');
const dogs = require('./Dogs')
const dog = require('./Dog')
const temperament = require('./Temperament')

const router = Router();

// Configurar los routers. Ejemplo: router.use('/auth', authRouter);
router.use('/dog', dog)
router.use('/dogs', dogs)
router.use('/temperament', temperament)

module.exports = router;

