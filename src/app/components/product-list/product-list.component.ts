import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

   products: Product [] = [];

   //constructor:
   constructor(private productService: ProductService){}

  ngOnInit(): void {
     //llamamos el método para que se nos muestren en el archivo .html
    this.listProducts();
  }

  listProducts(){
    //llamamos el método el servicio ProductService:
    this.productService.getProducts().subscribe(
      data => {this.products = data
        /*Util para hacer un debug: imprime lo que tiene data.
        Esto lo podemos ver en el navegador, cuando se hace la petición http,
        con ctrl + shift + i, se nos abre una ventana, nos ubicamos donde dice consola
        y ahí podemos ver los datos que se traen del backend:
        */
        console.log(data)
      }
    );
  }

  deleteProductById(id:number){
    this.productService.deleteProductById(id).subscribe(
      ()=> this.listProducts()
    )
  }

}
