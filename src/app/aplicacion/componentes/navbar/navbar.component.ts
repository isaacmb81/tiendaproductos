import { Component } from '@angular/core';
import { ServicioLoginService } from '../../../shared/servicios/servicio-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private servicio:ServicioLoginService){}

  cerrarSesion(){
    this.servicio.logout();
  }
}
