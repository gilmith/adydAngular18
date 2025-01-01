import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FichaComponent } from './personaje/ficha/ficha.component';

const routes: Routes = [
  {
    path : '',
    component : MainComponent,
    children : [
      {
        path : 'ficha',
        component : FichaComponent,
        loadChildren: () => import('./personaje/personaje.module').then(m => m.PersonajeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
