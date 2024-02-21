import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/componentes/login/login.component';
import { NotfoundComponent } from './shared/componentes/notfound/notfound.component';
import { inicioGuard } from './shared/guardias/inicio.guard';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"inicio", loadChildren:()=>import('./aplicacion/aplicacion.module').then((module)=> module.AplicacionModule), canActivate:[inicioGuard]},
  {path:"notfound", component:NotfoundComponent},
  {path:"**", redirectTo:"notfound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
