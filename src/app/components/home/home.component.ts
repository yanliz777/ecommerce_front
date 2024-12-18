import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
/*
En esta clase del componente Home tenemos la lógica 
para obtener los productos de la clase ProductService que los trae del back
y poderlo mostrar en el en el .html
*/
export class HomeComponent implements  OnInit{

  products: Product [] = []; //declaramos una lista vacia

  /*
    Inyectamos por constructor una variable de tipo ProductService para
    poderla utilizar en esta clase, es decir que productService  es una 
    variable a nivel de esta clase y la podemos utilizar en cualquier parte:
  */
  constructor(private productService: ProductService){
  }


  /*
  Método que se inicializa cuando se crea el componente, es un método
  que se ejecuta cuando se carga el componete.

El método .subscribe() "se suscribe" al Observable. Esto significa:

Inicia la emisión de datos: Cuando llamas a .subscribe(), la solicitud HTTP 
que define el Observable(en los metodos de la  clase ProductService) se ejecuta.

Maneja los resultados: Puedes proporcionar una función (o varias) para recibir 
los datos, manejar errores o realizar acciones cuando se completa la emisión.
  */
  ngOnInit(): void {
    //Lamammos al método getProducts() del servicio ProductService:
    this.productService.getProducts().subscribe(
      data => this.products = data
    );
  }

}
