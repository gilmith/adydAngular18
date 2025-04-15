import { HttpClient, HttpParams } from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import { catchError, delay, map, Observable, of, switchMap, throwError } from 'rxjs';
import { Carisma, Destreza, Inteligencia, Sabiduria } from '../models/HabilidadesModels';
import { environment } from '../../../enviorments/enviorment';
import { Constitucion, DescripcionMin } from '../models/DescripcionesModel';
import { Raza } from '../models/RazasModel';
import { Categoria, CategoriaSimpleElement } from '../models/CategoriaModel';
import { Alineamiento, Alineamientoe } from '../models/AlineamientoModel';
import {Fuerza, HabilidadesFuerzaService, DescripcionesService, Descripcion} from "adyd-api-client";


@Injectable()
export class BackendService {

  private readonly fuerzaService = inject(HabilidadesFuerzaService);
  private readonly descripcionesService = inject(DescripcionesService)


  constructor(private httpClient: HttpClient) { }


  public getRazas(fuerza: number, destreza: number, carisma: number, constitucion: number, inteligencia: number, sabiduria: number) : Observable<Raza[]> {
    /*let params = new HttpParams()
    .set('fuerza', fuerza).set('destreza', destreza).set('carisma', carisma).set('constitucion', constitucion).set('inteligencia', inteligencia).set('sabiduria', sabiduria);
    return this.httpClient.get<Razas>(`${environment.urlTiradas}/api/bbdd/razas/search/findRaza`, {params: params})
    .pipe(
      switchMap((response : Razas) => {
        return of(response._embedded.razas);
    }));*/
    return of()
  }
  public getAlinemaientos() : Observable<Alineamientoe[]> {
    return this.httpClient.get<Alineamiento>(`${environment.urlTiradas}/api/bbdd/alineamiento`)
      .pipe(
        switchMap((response : Alineamiento) => {
          return of(response._embedded.alineamientoes);
      }));

  }

  public getFuerza(tirada:number) : Observable<Fuerza> {
    return this.fuerzaService.habilidadesFuerzaPuntuacionBaseGet(tirada);

  }

  public getCarisma(tirada:number) : Observable<Carisma> {
    return this.httpClient.get<Carisma>(`${environment.urlTiradas}/api/bbdd/habilidadesCarismas/${tirada}`);

  }

  public getSabiduria(tirada:number) : Observable<Sabiduria> {
    return this.httpClient.get<Sabiduria>(`${environment.urlTiradas}/api/bbdd/habilidadesSabidurias/${tirada}`);

  }


  getInteligencia(tirada: number) : Observable<Inteligencia>{
    return this.httpClient.get<Inteligencia>(`${environment.urlTiradas}/api/bbdd/habilidadesInteligencias/${tirada}`);
  }



  public getDestreza(tirada:number) : Observable<Destreza> {
    return this.httpClient.get<Destreza>(`${environment.urlTiradas}/api/bbdd/habilidadesDestrezas/${tirada}`)
  }

  getConstitucion(tirada: number) :Observable<Constitucion> {
    return this.httpClient.get<Constitucion>(`${environment.urlTiradas}/api/bbdd/habilidadesConstitucions/${tirada}`)
  }


  public getCategorias(fuerza: number, destreza: number, carisma: number, constitucion: number, inteligencia: number, sabiduria: number): Observable<CategoriaSimpleElement[]>{
    let params = new HttpParams()
        .set('fuerza', fuerza).set('destreza', destreza).set('carisma', carisma)
        .set('constitucion', constitucion).set('inteligencia', inteligencia).set('sabiduria', sabiduria);
    return this.httpClient.get<Categoria>(`${environment.urlTiradas}/api/bbdd/categorias/search/findMinimo`, {params: params})
      .pipe(
        switchMap((response : Categoria) => {
          let categoriaSimpleElement : CategoriaSimpleElement[] = [];
          response._embedded.categorias.map(element =>
            categoriaSimpleElement.push({
              nombre:                element.nombre,
              id:                    element.id,
              dadoGolpe:             element.dadoGolpe,
              puntosPericias:        element.puntosPericias,
              puntosPericiasNoArmas: element.puntosPericiasNoArmas,
              descripcion:           element.descripcion
            })
          );
          return of(categoriaSimpleElement);
        }));
      }








  public getDescripciones(habilidad:string) : Observable<DescripcionMin[]> {
    return this.descripcionesService.descripcionesSearchFindByHabilidadGet(habilidad).pipe(
      switchMap((response : Array<Descripcion>)=> {
        let descripcionMin : DescripcionMin[] = [];
        response.forEach(element => {
          descripcionMin.push({
              caracteristica: element.nombre ?? 'caracteristica',
              description: element.descripcion ?? 'descripcion'
            });
        })
        return of(descripcionMin);
      })
    );

  }







}
