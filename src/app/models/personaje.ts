import { Constitucion } from "./DescripcionesModel";
import { Carisma, Destreza, Fuerza, Inteligencia, Sabiduria } from "./HabilidadesModels";
import { Raza } from "./RazasModel";

export interface Personaje {
    fuerza: Fuerza;
    destreza : Destreza;
    carisma : Carisma;
    constitucion : Constitucion;
    sabiduria : Sabiduria;
    inteligencia : Inteligencia;
    usuario : string;
    raza: Raza;
    nombre : string;
    
}
