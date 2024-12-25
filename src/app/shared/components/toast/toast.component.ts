import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent implements AfterViewInit {

  @Input() message?: string;
  @Input() text?: string;
  @Input() linkText?: string;
  @Input() mensajeInput?: string;
  @Input() type?: any;
  @ViewChild('toast') toastElement! : ElementRef;
  public toastInstance? : bootstrap.Toast
  constructor() {}

  ngAfterViewInit() {
    const toastElement = this.toastElement.nativeElement;
    this.toastInstance = bootstrap.Toast.getOrCreateInstance(toastElement, { autohide: true, delay: 10000, animation: true});
    this.toastInstance.show();
  }



}
