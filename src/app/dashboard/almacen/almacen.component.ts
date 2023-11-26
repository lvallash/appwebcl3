import { Component } from '@angular/core';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent {


  precioUnitario: number;
  cantidadArticulos: number;
  precioFinal: number;
  mostrarPrecio = false;

  calcularPrecio() {
    const descuentoMayor20 = 0.1; 
    const descuentoHasta20 = 0.05; 

    if (this.cantidadArticulos > 20) {
      this.precioFinal = this.precioUnitario * this.cantidadArticulos * (1 - descuentoMayor20);
    } else if (this.cantidadArticulos <= 20 && this.cantidadArticulos > 10) {
      this.precioFinal = this.precioUnitario * this.cantidadArticulos * (1 - descuentoHasta20);
    } else {
      this.precioFinal = this.precioUnitario * this.cantidadArticulos;
    }

    this.mostrarPrecio = true;
  }

}
