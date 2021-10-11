import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { OpcionComponent} from './componentes/opcion/opcion.component';
import { OpcionAdicionalComponent } from './componentes/opcion-adicional/opcion-adicional.component';


const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: "Opcion",
    component: OpcionComponent
  },
  {
    path: "OpcionAdicional",
    component: OpcionAdicionalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
