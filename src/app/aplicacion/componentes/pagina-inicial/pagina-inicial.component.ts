import { Component, OnInit } from '@angular/core';
import { ServicioProductosService } from '../../servicios/servicio-productos.service';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.css'
})
export class PaginaInicialComponent implements OnInit {

  productos: Producto[] = []

  constructor(private servicioProductos:ServicioProductosService) { }

  ngOnInit(): void {
    this.servicioProductos.hacerPeticionProductos().subscribe(
      (response) => {
        this.productos=response;
      }
    );
  }
}
