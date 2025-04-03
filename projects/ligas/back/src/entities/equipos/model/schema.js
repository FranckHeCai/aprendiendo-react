import { db, DataTypes } from "@Application/database";

export default db.define("equipos", {
  nombre: DataTypes.STRING,
	fundacion: DataTypes.STRING,
	presidente: DataTypes.STRING,
	presupuesto: DataTypes.INTEGER,
	equipacion: DataTypes.INTEGER,
	foto_equipo: DataTypes.INTEGER,
	foto_escudo: DataTypes.INTEGER,
	pagina_web: DataTypes.INTEGER,
});
