import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  /*Variables que nos sirve para mapearse con los elementos que van a estar en el formulario
    para que haya una forma de ingresar datos al formulario y que puedan mapearse hacia este
    archivo .ts para que puedan pasarse los datos desde la vista al archivo .ts y luego a la BD:
  */
  id : number = 0;
  code : String = " ";
  name : String = " ";
  description: String = " ";
  price: number = 0;
  urlImage: String = " ";
  userId : String = "1";
  categoryId : String = "2";

  //constructor:
  constructor(private productService: ProductService){

  }


  ngOnInit(): void {
    
  }


}
