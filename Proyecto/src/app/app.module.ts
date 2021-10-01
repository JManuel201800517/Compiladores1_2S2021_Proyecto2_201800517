import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { OpcionAdicionalComponent } from './componentes/opcion-adicional/opcion-adicional.component';
import { OpcionComponent } from './componentes/opcion/opcion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    OpcionAdicionalComponent,
    OpcionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
