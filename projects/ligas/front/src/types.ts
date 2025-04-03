export type Team = {
    id:          number;
    nombre:      string;
    fundacion:   string;
    presidente:  string;
    presupuesto: number;
    equipacion:  string;
    foto_equipo: string;
    foto_escudo: string;
    pagina_web:  string;
    createdAt:   null;
    updatedAt:   null;
}

export type Player = {
    id:              number;
    equipo_cod:      number;
    nombre:          string;
    apellidos:       string;
    demarcacion:     number;
    nacionalidad:    number;
    numero_camiseta: number;
    calidad:         number;
    velocidad:       number;
    vision:          number;
    nombre_jugador:  string;
    descripcion:     string;
    createdAt:       null;
    updatedAt:       null;
}