export interface Razas {
    _embedded: Embedded;
}

export interface Embedded {
    razas: Raza[];
}

export interface Raza {
    nombre:                string;
    minimoFuerza:          number;
    minimoDestreza:        number;
    minimoConstitucion:    number;
    minimoInteligencia:    number;
    minimoSabiduria:       number;
    minimoCarisma:         number;
    id:                    number;
    modifConstitucion:     null;
    modifCarisma:          null;
    modifFuerza:           null;
    modifDestreza:         null;
    modifSabiduria:        number | null;
    modifInteligencia:     number | null;
    descripcion:           string;
    habilidadesEspeciales: null | string;
}



export interface Self {
    href: string;
}
