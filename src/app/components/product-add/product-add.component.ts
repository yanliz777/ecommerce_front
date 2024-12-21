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
  code : string = '';
  name : string = " ";
  description: string = " ";
  price: number = 0;
  urlImage: string = " ";
  userId : string = "1";
  categoryId : string = "2";

  //constructor:
  constructor(private productService: ProductService){

  }


  ngOnInit(): void {
    
  }

  //Método que tiene la lógica de como se empaqueta un producto y se envia al backend:
  addProduct(){
    /*
    Esta constante "formData" almacena una clave:valor de
    todos los atributos que se encuentren en el formulario:
    */
    const formData = new FormData();
    /*
    Añadimos los atributos que tenemos en la parte superiror de este archivo .ts del 
    componente product-add. La clave debe de coincidir con el objeto que tenemos en el backend.
    append(): tiene dos parámetros. El primer parámetro es el valor que lleva hacia el backend
    y el segundo parámetro es el valor que le damos en este instante:
    */
    formData.append('id', this.id.toString());
    formData.append('code', this.code);
    formData.append('name',this.name);
    formData.append('description',this.description);
    formData.append('price', this.price.toString());
    formData.append('urlImage', this.urlImage);
    formData.append('userId', this.userId);
    formData.append('categoryId', this.categoryId);
//Para ver los que nos muestra la constante fomrData:
    console.log(formData);
  }

}
