import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of, switchMap } from 'rxjs';
import { Carisma, Destreza, Fuerza, Inteligencia, Sabiduria } from '../models/HabilidadesModels';
import { environment } from '../../../enviorments/enviorment';
import { Constitucion, Descripciones, DescripcionMin } from '../models/DescripcionesModel';
import { Raza, Razas } from '../models/RazasModel';

@Injectable({
  providedIn: 'root'
})
export class BackendService {


  constructor(private httpClient: HttpClient) { }


  public getRazas(fuerza: number, destreza: number, carisma: number, constitucion: number, inteligencia: number, sabiduria: number) : Observable<Raza[]> {
    let params = new HttpParams()
    .set('fuerza', fuerza).set('destreza', destreza).set('carisma', carisma).set('constitucion', constitucion).set('inteligencia', inteligencia).set('sabiduria', sabiduria);
    return this.httpClient.get<Razas>(`${environment.urlTiradas}/api/bbdd/razas/search/findRaza`, {params: params})
    .pipe(
      switchMap((response : Razas) => {      
        return of(response._embedded.razas);
    }));
  }


  public getFuerza(tirada:number) : Observable<Fuerza> {
    return this.httpClient.get<Fuerza>(`${environment.urlTiradas}/api/bbdd/habilidadesFuerzas/${tirada}`);

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

  public getDescripciones(habilidad:string) : Observable<DescripcionMin[]> {
    return this.httpClient.get<Descripciones>(`${environment.urlTiradas}/api/bbdd/descripciones/search/findByHabilidad`, {params : {'habilidad' : habilidad}})
    .pipe(
      switchMap(response => {
       let descripcion : DescripcionMin[] = []; 
       response._embedded.descripcioneses.forEach(item => {
        descripcion.push({
          caracteristica : item.caracteristica,
          description : item.descripcion
        })
       })
       return of(descripcion);
    }))

  }

}
