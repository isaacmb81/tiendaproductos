import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { PaginaProductoComponent } from './componentes/pagina-producto/pagina-producto.component';

const routes: Routes = [
  {path:"",children:[
    {path:"products",component:PaginaInicialComponent},
    {path:"products/:id", component:PaginaProductoComponent},
    {path:"**", redirectTo:"products"}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicacionRoutingModule { }
