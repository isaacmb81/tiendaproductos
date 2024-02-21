import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './componentes/notfound/notfound.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './componentes/login/login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NotfoundComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule {}
