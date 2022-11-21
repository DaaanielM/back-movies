const model = require('../models/peliculas.model');

const controller = {};

controller.listar = async (req, res) => {
	try {
		const result = await model.listar();
		res.json({
			datos: result,
		});
	} catch (error) {
		res.json({
			message: 'Ha ocurrido un error, contacte con el admin',
			error: true,
		});
	}
};


module.exports = controller;
