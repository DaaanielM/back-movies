const conexion = require('../database/db');

const model = {};

model.listar = async () => {
	try {
		const sql = `SELECT * FROM promociones`;
		const result = await conexion.query(sql);
		return result;
	} catch (error) {
		console.log(error);
	}
};

model.obtenerPromo = async (id) => {
	try {
		const sql = `SELECT * FROM promociones WHERE id = ${id}`;
		const result = await conexion.query(sql);
		return result;
	} catch (error) {
		console.log(error);
	}
};

model.crear = async (datos) => {
	try {
		const sql = `INSERT INTO promociones SET ?`;
		const result = await conexion.query(sql, datos);
		return result;
	} catch (error) {
		console.log(error);
	}
};

model.actualizar = async (datos, id) => {
	try {
		const sql = `UPDATE promociones SET ? WHERE id = ${id}`;
		const result = await conexion.query(sql, datos);
		return result;
	} catch (error) {
		console.log(error);
	}
};

model.eliminar = async (id) => {
	try {
		const sql = `DELETE FROM promociones WHERE id = ${id}`;
		const result = await conexion.query(sql);
		return result;
	} catch (error) {
		console.log(error);
	}
};

module.exports = model;
