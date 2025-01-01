import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, ViewContainerRef } from '@angular/core';
import { ToastComponent } from '../../shared/components/toast/toast.component';
import { ToastInterface } from './toastInterface';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private appRef: ApplicationRef,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef 
  ) {}

  public show(toastOptions : ToastInterface) {
    const componentRef = this.viewContainerRef.createComponent(ToastComponent);
    componentRef.instance.mensajeInput = toastOptions.message;
    componentRef.instance.text = toastOptions.text;
    componentRef.instance.linkText = toastOptions.linkText;
    componentRef.instance.type = this.calculateType(toastOptions.possition, toastOptions.type);
    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ToastComponent);
    // const componentRef = componentFactory.create(this.injector);
    // componentRef.instance.message = message;
    // this.appRef.attachView(componentRef.hostView);
    // const domElement = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
    // document.body.appendChild(domElement);

  }

  private calculateType(position: string | undefined, type: string | undefined): { [key: string]: boolean } {
    const styles: { [key: string]: boolean } = {};
  
    if (type === 'error') {
      styles['bg-danger'] = true; // Utilizar la clase CSS directamente
    } else {
      styles['bg-light'] = true; // Clase de fondo por defecto
    }
  
    switch (position) {
      case 'top-right':
        styles['top-0'] = true;
        styles['end-0'] = true;
        break;
      case 'bottom-right':
        styles['bottom-0'] = true;
        styles['end-0'] = true;
        break;
      default:
        styles['bottom-0'] = true;
        styles['start-50'] = true;
        styles['translate-middle-x'] = true;
        break;
    }
  
    return styles;
  }


}
