import { Injectable } from '@angular/core';
/*
Impontamos la clase HttpClient que tiene todos lo métodos http pra poder conectarnos 
a la API y poder hacer cualquier acción en nuestro backend:
*/
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../common/product';

/*
Esta clase nos va a permitir poder conectarnos hacia los métodos de nuestra API rest
con Spring boot y también nos va a permitir consumir esta API para  poder hacer 
todas las acciones relacionadas con el producto
*/
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /*
  Alamacena URL de conexion a la API rest que queremos gestionar, es decir, la ruta para poder apuntar a ese
  controlador en el backend y poder consumir todos lo métodos que hemos definido en ese controlador:
  */
  private apiUrl: string = "http://localhost:8085/api/v1/admin/products";

  constructor(private httpclient: HttpClient) { }

  /*
    Método que permite traer todos los productos:
    Desglose de la sintaxis:
getProduct()= Nombre del método para obtener productos
: Observable<Product[]> = Indica que el método devuelve un 
Observable de un arreglo de objetos Product
this.httpcliente.get<Product[]>()= Método GET de HttpClient que espera un arreglo de Product
(`${this.apiUrl}/findAllProducts`): URL donde se realizará la petición HTTP.

Un Observable es una secuencia de datos que se emiten en el 
tiempo, útil para manejar tareas asíncronas como llamadas HTTP.
  */
  getProducts(): Observable<Product[]> { 
    return this.httpclient.get<Product[]>(`${this.apiUrl}/findAllProducts`); 
  }

  /*
  Método que permite crear un producto: 
  formData:any : es un parámetro que es un formulario que viene con el producto.
  any: quiere decir que puede ser cualquier valor/tipo de dato que pueda retornar:
  */
  createProduct(formData:any) :Observable<any>{
    return this.httpclient.post<Product>(`${this.apiUrl}/saveProduct`,formData);
  }

  /*
  Método que nos permite eliminar un producto por el id:
      id:number : parámetro
  */
 deleteProductById(id:number) :Observable<any>{
   return this.httpclient.delete(`${this.apiUrl}/deleteProductById/`+id);
 }

 /*
 Método para traer un producto por su ID:
 */
 getProductById(id: number) :Observable<Product>{
   return this.httpclient.get<Product>(`${this.apiUrl}/findById/`+ id);
 }



}
