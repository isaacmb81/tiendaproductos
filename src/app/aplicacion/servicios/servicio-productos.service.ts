import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService {

  private endpointProductos: string = "https://fakestoreapi.com/products"

  constructor(private http: HttpClient) { }

  hacerPeticionProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.endpointProductos)
  }

  hacerPeticionProducto(id:string):Observable<Producto>{
    return this.http.get<Producto>(this.endpointProductos+"/"+id)
  }
  
}
