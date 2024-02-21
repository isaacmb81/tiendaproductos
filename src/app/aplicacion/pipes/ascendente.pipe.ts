import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/producto';

@Pipe({
  name: 'ascendente'
})
export class AscendentePipe implements PipeTransform {

  transform(value: Producto[], ...args: unknown[]): unknown {
    return value.sort((a, b) => a.price - b.price)

  }

}
