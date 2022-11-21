const conexion = require('../database/db');

const model = {};

model.listar = async () => {
	try {
		const sql = `SELECT * FROM peliculas`;
		const result = await conexion.query(sql);
		return result;
	} catch (error) {
		console.log(error);
	}
};

model.obtenerPelis = async (id) => {
	try {
		const sql = `SELECT * FROM peliculas WHERE id = ${id}`;
		const result = await conexion.query(sql);
		return result;
	} catch (error) {
		console.log(error);
	}
};

model.crear = async (datos) => {
	try {
		const sql = 'INSERT INTO peliculas SET ?';
		const result = await conexion.query(sql, datos);
		return result;
	} catch (error) {
		console.log(error);
	}
};

model.actualizar = async (datos, id) => {
	try {
		const sql = `UPDATE peliculas SET ? WHERE id = ${id}`;
		await conexion.query(sql, datos);
	} catch (error) {
		console.log(error);
	}
};

model.eliminar = async (id) => {
	try {
		const sql = `DELETE FROM peliculas WHERE id = ${id}`;
		await conexion.query(sql);
	} catch (error) {
		console.log(error);
	}
};

module.exports = model;
