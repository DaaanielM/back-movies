const express = require('express');
const route = express.Router();

const controller = require('../controllers/peliculas.controller');

route.get('/listar', controller.listar);

module.exports = route;
