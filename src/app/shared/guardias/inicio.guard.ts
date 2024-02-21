import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ServicioLoginService } from '../servicios/servicio-login.service';

export const inicioGuard: CanActivateFn = (route, state) => {
  
  const servicio=inject(ServicioLoginService)
  const router = inject(Router)

  if(servicio.estarlogueado()){
    return true;
  }else{
    router.navigateByUrl("/notfound")
    return false
  }
};
