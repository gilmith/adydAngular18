export interface Razas {
    _embedded: Embedded;
    _links:    RazasLinks;
}

export interface Embedded {
    razas: Raza[];
}

export interface Raza {
    nombre:             string;
    minimoFuerza:       number;
    minimoDestreza:     number;
    minimoConstitucion: number;
    minimoInteligencia: number;
    minimoSabiduria:    number;
    minimoCarisma:      number;
    id:                 number;
    _links:             RazaLinks;
}

export interface RazaLinks {
    self: Self;
    raza: Self;
}

export interface Self {
    href: string;
}

export interface RazasLinks {
    self: Self;
}
