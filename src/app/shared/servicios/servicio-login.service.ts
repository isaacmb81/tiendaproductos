import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioLoginService {

  private logueado!:boolean;
  private correo:string ="aprueboangular@mail.com";
  private password:string="RooT"

  // private correo:string ="admin";
  // private password:string="admin"

  constructor() { this.logueado=false;}
  
  login(correo:string, password:string){

    if(correo==this.correo && password==this.password){
      this.logueado=true
    }else{
      this.logueado=false
    }
    return of(this.logueado)
  }

  estarlogueado():boolean{
    return this.logueado
  }
  logout():void{
    this.logueado=false;
  }
}
