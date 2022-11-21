const router = require('express').Router();

// router.use('/categorias', require('../routes/categorias.route'));

router.use('/peliculas', require('../routes/peliculas.route'));
router.use('/info', require('../routes/info.route'));
router.use('/promociones', require('../routes/promociones.route'));
// router.use('/pedidos', require('../routes/listPedidos.route'));

// parcial2

// Recuerda cambiar la base de datos en db.js :v
module.exports = router;
