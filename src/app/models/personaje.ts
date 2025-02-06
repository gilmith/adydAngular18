import { Constitucion } from "./DescripcionesModel";
import { Carisma, Destreza, Fuerza, Inteligencia, Sabiduria } from "./HabilidadesModels";

export interface Personaje {
    fuerza: Fuerza;
    destreza : Destreza;
    carisma : Carisma;
    constitucion : Constitucion;
    sabiduria : Sabiduria;
    inteligencia : Inteligencia;
    usuario : string;
    nombre : string;
    
}
