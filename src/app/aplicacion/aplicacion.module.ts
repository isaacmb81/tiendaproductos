import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicacionRoutingModule } from './aplicacion-routing.module';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { PaginaProductoComponent } from './componentes/pagina-producto/pagina-producto.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AscendentePipe } from './pipes/ascendente.pipe';


@NgModule({
  declarations: [
    PaginaInicialComponent,
    PaginaProductoComponent,
    NavbarComponent,
    AscendentePipe
  ],
  imports: [
    CommonModule,
    AplicacionRoutingModule,
    HttpClientModule,
    RouterModule
  ]
})
export class AplicacionModule { }
