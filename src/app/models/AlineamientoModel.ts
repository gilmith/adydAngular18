export interface Alineamiento {
    _embedded: Embedded;
    _links:    AlineamientoLinks;
    page:      Page;
}

export interface Embedded {
    alineamientoes: Alineamientoe[];
}

export interface Alineamientoe {
    id:          number;
    nombre:      string;
    descripcion: string;
    _links:      AlineamientoeLinks;
}

export interface AlineamientoeLinks {
    self:         Profile;
    alineamiento: Profile;
}

export interface Profile {
    href: string;
}

export interface AlineamientoLinks {
    self:    Profile;
    profile: Profile;
}

export interface Page {
    size:          number;
    totalElements: number;
    totalPages:    number;
    number:        number;
}
