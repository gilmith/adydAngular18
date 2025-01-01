import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../../../../../models/personaje';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tiradas',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './tiradas.component.html',
  styleUrl: './tiradas.component.css'
})
export class TiradasComponent implements OnInit{

  @Input() personaje? : Personaje;
  @Output() public valorEmmit: EventEmitter<Personaje> = new EventEmitter();
  items = ['Carrots', 'Tomatoes', 'Onions', 'Apples', 'Avocados'];

  basket = ['Oranges', 'Bananas', 'Cucumbers'];

  drop(event: CdkDragDrop<string[]>) {
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

  ngOnInit(): void {
    console.log("aquie hace las tiradas nada mas empezar");
  }

  public emitePersonajeConHabilidades() {
    this.valorEmmit.emit(this.personaje);
  }





}
