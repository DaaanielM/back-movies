const express = require('express');
const route = express.Router();

const controller = require('../controllers/info.controller');

route.get('/listar', controller.listar);
route.get('/obtenerPelis/:id', controller.obtenerPelis);
route.post('/crear', controller.crear);
route.put('/actualizar/:id', controller.actualizar);
route.delete('/eliminar/:id', controller.eliminar);

module.exports = route;
