export interface Descripciones {
    _embedded: Embedded;
    _links:    DescripcionesLinks;
    page:      Page;
}

export interface Embedded {
    descripcioneses: Descripcionesis[];
}

export interface Descripcionesis {
    id:             number;
    habilidad:      string;
    caracteristica: string;
    descripcion:    string;
    _links:         DescripcionesisLinks;
}

export interface DescripcionMin {
    caracteristica : string;
    description : string;
}


export interface DescripcionesisLinks {
    self:          Profile;
    descripciones: Profile;
}

export interface Profile {
    href: string;
}

export interface DescripcionesLinks {
    self:    Profile;
    profile: Profile;
    search:  Profile;
}

export interface Page {
    size:          number;
    totalElements: number;
    totalPages:    number;
    number:        number;
}

export interface Constitucion {
    puntuacionBase:    number;
    ajusteGolpe:       number;
    colapso:           number;
    resurreccion:      number;
    resistenciaVeneno: number;
    regeneracion:      string;
}

export interface Links {
    self:                    HabilidadesConstitucion;
    habilidadesConstitucion: HabilidadesConstitucion;
}

export interface HabilidadesConstitucion {
    href: string;
}
