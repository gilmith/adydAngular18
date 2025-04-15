import { CategoriaSimpleElement } from "./CategoriaModel";
import { Constitucion } from "./DescripcionesModel";
import { Carisma, Destreza, Inteligencia, Sabiduria } from "./HabilidadesModels";
import { Raza } from "./RazasModel";
import {Fuerza} from "adyd-api-client";
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
    categoria: CategoriaSimpleElement;
    alineamiento : string;
    sexo: Sexo;
    edad: number;
    colorPelo: string;
    altura: number;


}
export enum Sexo {
  'Masculino',
  'Femenino',
  'TBC'
}
