const model = require('../models/info.model');

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

controller.obtenerPelis = async (req, res) => {
	try {
		const result = await model.obtenerPelis(req.params.id);
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
			img: req.body.img,
			nombre: req.body.nombre,
			duracion: req.body.duracion,
			fecha: req.body.fecha,
			descripcion: req.body.descripcion,
			id_genero: req.body.id_genero,
			id_pais: req.body.id_pais,
			id_director: req.body.id_director,
			reparto: req.body.reparto,
		};
		await model.crear(datos);
		res.json({
			message: 'Cartelera creada correctamente',
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
		const id = req.params.id;

		const datos = {
			img: req.body.img,
			nombre: req.body.nombre,
			duracion: req.body.duracion,
			fecha: req.body.fecha,
			descripcion: req.body.descripcion,
			id_genero: req.body.id_genero,
			id_pais: req.body.id_pais,
			id_director: req.body.id_director,
			reparto: req.body.reparto,
		};
		await model.actualizar(datos, id);
		res.json({
			message: 'Cartelera actualizada correctamente',
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
			message: 'Cartelera eliminada correctamente',
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
