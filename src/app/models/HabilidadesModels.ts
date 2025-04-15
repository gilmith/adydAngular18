export interface Destreza {
    puntuacionBase: number;
    reaccion:       number;
    proyectil:      number;
    defensa:        number;
}

export interface Links {
    self:                HabilidadesDestreza;
    habilidadesDestreza: HabilidadesDestreza;
}

export interface HabilidadesDestreza {
    href: string;
}

export interface Inteligencia {
    puntuacionBase: number;
    idiomas:        number;
    nivelConjuro:   number;
    nuevosConjuros: number;
    maxConjuros:    number;
    ilusiones:      null;
}

export interface Links {
    self:                    HabilidadesInteligencia;
    habilidadesInteligencia: HabilidadesInteligencia;
}

export interface HabilidadesInteligencia {
    href: string;
}
export interface Sabiduria {
    puntuacionBase: number;
    defensa:        number;
    bonusConjuros:  null;
    fracasoConjuro: number;
}

export interface Links {
    self:                 HabilidadesSabiduria;
    habilidadesSabiduria: HabilidadesSabiduria;
}

export interface HabilidadesSabiduria {
    href: string;
}

export interface Carisma {
    puntuacionBase: number;
    maxseguidores:  number;
    lealtad:        number;
    reaccion:       number;
}

export interface Links {
    self:               HabilidadesCarisma;
    habilidadesCarisma: HabilidadesCarisma;
}

export interface HabilidadesCarisma {
    href: string;
}
