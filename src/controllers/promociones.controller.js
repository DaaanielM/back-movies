const model = require('../models/promociones.model');

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

controller.obtenerPromo = async (req, res) => {
	try {
		const result = await model.obtenerPromo(req.params.id);
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

controller.crear = async (req, res) => {
	try {
		const datos = {
			ofertas: req.body.ofertas,
		};
		await model.crear(datos);
		res.json({
			message: 'Oferta creada correctamente',
			error: false,
		});
	} catch (error) {
		res.json({
			message: 'Ha ocurrido un error, contacte con el admin',
			error: true,
		});
	}
};

controller.actualizar = async (req, res) => {
	try {
		const datos = {
			ofertas: req.body.ofertas,
		};
		await model.actualizar(datos, req.params.id);
		res.json({
			message: 'Oferta actualizada correctamente',
			error: false,
		});
	} catch (error) {
		res.json({
			message: 'Ha ocurrido un error, contacte con el admin',
			error: true,
		});
	}
};

controller.eliminar = async (req, res) => {
	try {
		const id = req.params.id;
		await model.eliminar(id);
		res.json({
			message: 'Oferta eliminada correctamente',
			error: false,
		});
	} catch (error) {
		res.json({
			message: 'Ha ocurrido un error, contacte con el admin',
			error: true,
		});
	}
};

module.exports = controller;
