import { db, DataTypes } from "@Application/database";

export default db.define("jugadores", {
  equipo_cod: DataTypes.INTEGER,
	nombre: DataTypes.STRING,
	apellidos: DataTypes.STRING,
	demarcacion: DataTypes.INTEGER,
	nacionalidad: DataTypes.INTEGER,
	numero_camiseta: DataTypes.INTEGER,
	calidad: DataTypes.INTEGER,
	velocidad: DataTypes.INTEGER,
	vision: DataTypes.INTEGER,
	nombre_jugador: DataTypes.INTEGER,
	descripcion: DataTypes.STRING,
});
