export interface Categoria {
    _embedded: Embedded;
    _links:    CategoriaLinksClass;
}

export interface Embedded {
    categorias: CategoriaElement[];
}

export interface CategoriaElement {
    nombre:                string;
    minimoFuerza:          number;
    minimoDestreza:        number;
    minimoConstitucion:    number;
    minimoInteligencia:    number;
    minimoSabiduria:       number;
    minimoCarisma:         number;
    id:                    number;
    dadoGolpe:             number;
    puntosPericias:        number;
    puntosPericiasNoArmas: number;
    _links:                CategoriaLinks;
    descripcion:           string;

}

export interface CategoriaLinks {
    self:      Self;
    categoria: Self;
}

export interface Self {
    href: string;
}

export interface CategoriaLinksClass {
    self: Self;
}

export interface CategoriaSimpleElement {
    nombre:                string;
    id:                    number;
    dadoGolpe:             number;
    puntosPericias:        number;
    puntosPericiasNoArmas: number;
    descripcion:           string;
}
