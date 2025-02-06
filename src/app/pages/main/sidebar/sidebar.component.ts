import { AfterViewInit, Component, effect, ElementRef, inject, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { OffcanvasService } from '../../../services/offcanvas/offcanvas.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit  {

  @ViewChild('sidebar') sideBarElement! : ElementRef;
  public sideBar? : bootstrap.Offcanvas;
  public isOpen = inject(OffcanvasService);

  constructor() {
   effect(() => {
    console.log('ha cambiado el valor de la señal ', this.isOpen.getData());

    this.sideBar?.toggle();
   })
  }


  ngAfterViewInit() {
    this.sideBar = new bootstrap.Offcanvas(this.sideBarElement.nativeElement);

  }

  toggleOffcanvas() {
      this.sideBar?.toggle();
  }


}
