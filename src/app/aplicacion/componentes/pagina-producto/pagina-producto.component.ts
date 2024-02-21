import { Component, OnInit } from '@angular/core';
import { ServicioProductosService } from '../../servicios/servicio-productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-pagina-producto',
  templateUrl: './pagina-producto.component.html',
  styleUrl: './pagina-producto.component.css'
})
export class PaginaProductoComponent implements OnInit {

  producto!: Producto

  constructor(private servicioProducto: ServicioProductosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.servicioProducto.hacerPeticionProducto(id))
    ).subscribe(data => {
      this.producto = data
    })
  }

}
