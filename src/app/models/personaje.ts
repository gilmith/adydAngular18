import {Fuerza, Destreza, Carisma, Sabiduria, Inteligencia, Category, Raza, Constitucion} from "adyd-api-client";
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
    categoria: Category;
    alineamiento : string;
    sexo: Sexo.TBC;
    edad: number;
    colorPelo: string;
    altura: number;


}
export enum Sexo {
  'Masculino',
  'Femenino',
  'TBC'
}
