const conexion = require('../database/db');
const model = {};

model.listar = async () => {
	try {
		const sql = `SELECT pe.img, pe.nombre, ge.nombre genero FROM peliculas pe
        INNER JOIN genero ge ON ge.id = pe.id_genero`;
		const result = await conexion.query(sql);
		return result;
	} catch (error) {
		console.log(error);
	}
};

module.exports = model;
