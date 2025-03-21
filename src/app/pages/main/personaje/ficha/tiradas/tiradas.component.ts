import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { Personaje } from '../../../../../models/personaje';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { BackendService } from '../../../../../services/backend.service';
import { FuerzaComponent } from "./fuerza/fuerza.component";
import { Carisma, Destreza, Fuerza, HabilidadesFuerza, Inteligencia, Sabiduria } from '../../../../../models/HabilidadesModels';
import { DestrezaComponent } from "./destreza/destreza.component";
import { Constitucion } from '../../../../../models/DescripcionesModel';
import { ConstitucionComponent } from "./constitucion/constitucion.component";
import { InteligenciaComponent } from "./inteligencia/inteligencia.component";
import { SabiduriaComponent } from "./sabiduria/sabiduria.component";
import { CarismaComponent } from "./carisma/carisma.component";

@Component({
  selector: 'app-tiradas',
  standalone: true,
  imports: [CommonModule, DragDropModule, FuerzaComponent, DestrezaComponent, ConstitucionComponent, InteligenciaComponent, SabiduriaComponent, CarismaComponent],
  templateUrl: './tiradas.component.html',
  styleUrl: './tiradas.component.css',
  providers: [BackendService]
})
export class TiradasComponent implements OnInit{



  public componenteHabilidad =signal<'F'| 'D'| 'C'| 'CA'| 'S'| 'I'|''>('');

  constructor(private readonly backend : BackendService) {}

  @Input() personaje? : Personaje;
  @Output() public valorEmmit: EventEmitter<Personaje> = new EventEmitter();
  public clicked : boolean = false;
  public items : number[] = [];
  basket = [''];
puntuaciones: any;
  public fuerza: number[] =[];
  public destreza : number[] = [];
  public fuerzaData? : Fuerza;
  public destrezaData? : Destreza;
  public constituciondData? :Constitucion;
  public inteligenciaData?: Inteligencia;
  public sabiduriaData?: Sabiduria;
  public carismaData?: Carisma;
  public constitucion: number[] = [];
  public inteligencia: number[] = [];
  public sabiduria: number[] = [];
  public carisma: number[]= [];

  drop(event: CdkDragDrop<number[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
//export declare function transferArrayItem<T = any>(currentArray: T[], targetArray: T[], currentIndex: number, targetIndex: number): void;

  dropFuerza(event: CdkDragDrop<number[]>) {
    if(this.fuerza.length == 0) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        this.items,
        this.fuerza,
        event.previousIndex,
        event.currentIndex,
      );
      this.backend.getFuerza(this.fuerza[0]).subscribe(response => {
        this.fuerzaData = response;
        this.componenteHabilidad.set('F');
      });  
    }
  }
  }

  showFuerza() {
    this.backend.getFuerza(this.fuerza[0]).subscribe(response => {
      this.fuerzaData = response;
      this.componenteHabilidad.set('F');
    });  
  }
    

  dropDestreza(event: CdkDragDrop<number[]>) {
    if(this.destreza.length == 0) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        this.items,
        this.destreza,
        event.previousIndex,
        event.currentIndex,
      );
      this.backend.getDestreza(this.destreza[0]).subscribe(response => {
        this.destrezaData = response;
        this.componenteHabilidad.set('D');
      });  
    }
  }
  }

  showDestreza() {
    this.backend.getDestreza(this.destreza[0]).subscribe(response => {
      this.destrezaData = response;
      this.componenteHabilidad.set('D');
    });  
  }

  dropConstitucion(event: CdkDragDrop<number[]>) {
    if(this.constitucion.length == 0) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(
          this.items,
          this.constitucion,
          event.previousIndex,
          event.currentIndex,
        );
        this.backend.getConstitucion(this.constitucion[0]).subscribe(response => {
          this.constituciondData = response;
          this.componenteHabilidad.set('C');
        });  
      }
    }
  }

  public showConstitucion() {
    this.backend.getConstitucion(this.constitucion[0]).subscribe(response => {
      this.constituciondData = response;
      this.componenteHabilidad.set('C');
    });  
  }

  dropInteligencia(event: CdkDragDrop<number[]>) {
    if(this.inteligencia.length == 0) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(
          this.items,
          this.inteligencia,
          event.previousIndex,
          event.currentIndex,
        );
        this.backend.getInteligencia(this.inteligencia[0]).subscribe(response => {
          this.inteligenciaData = response;
          this.componenteHabilidad.set('I');
        }); 
      }
    }
  }
  dropSabiduria(event: CdkDragDrop<number[]>) {
    if(this.sabiduria.length == 0) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(
          this.items,
          this.sabiduria,
          event.previousIndex,
          event.currentIndex,
        );
        this.backend.getSabiduria(this.sabiduria[0]).subscribe(response => {
          this.sabiduriaData = response;
          this.componenteHabilidad.set('S');
        });  
      }
    }
  }

  public showInteligencia() {
    this.backend.getInteligencia(this.inteligencia[0]).subscribe(response => {
      this.inteligenciaData = response;
      this.componenteHabilidad.set('I');
    }); 
  }
  public showSabiduria(){ 
    this.backend.getSabiduria(this.sabiduria[0]).subscribe(response => {
      this.sabiduriaData = response;
      this.componenteHabilidad.set('S');
    });  
  }

  dropCarisma(event: CdkDragDrop<number[]>) {
    if(this.carisma.length == 0) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(
          this.items,
          this.carisma,
          event.previousIndex,
          event.currentIndex,
        );
        this.backend.getCarisma(this.carisma[0]).subscribe(response => {
          this.carismaData = response;
          this.componenteHabilidad.set('CA');
        });  
      }
    }
  }

  public showCarisma() {
    this.backend.getCarisma(this.carisma[0]).subscribe(response => {
      this.carismaData = response;
      this.componenteHabilidad.set('CA');
    });  
  }
    
  private numeroAleatorioRango(min :number, max :number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ngOnInit(): void {
    this.reroll();
  }

  public emitePersonajeConHabilidades() {
    this.valorEmmit.emit(this.personaje);
  }


  public reroll() {
    this.items=[];
    this.fuerza=[];
    this.destreza=[];
    this.carisma=[];
    this.constitucion=[];
    this.inteligencia=[];
    this.sabiduria=[];
    this.componenteHabilidad.set('');
    for(let i = 0; i <= 5; i++){
      let temp = [];
      for(let j = 0; j <= 3; j++){
        temp.push(this.numeroAleatorioRango(1,6))
      }
      temp = temp.sort();
      temp.splice(0,1);
      this.items.push(temp.reduce((acumulador, valorActual) => {
        return acumulador + valorActual;
      }, 0));
    }}




}
