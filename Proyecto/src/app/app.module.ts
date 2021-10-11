import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

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
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
