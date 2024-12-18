import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
/*
Importamos este paquete aquí(HttpClientModule) ya que utilizamos una clase que 
pertenece a este paquete en los servicios:
*/
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';

/*RouterModule: esta clase sirve para poder registrar 
mis rutas, en este caso, el nombre de mi constante para que la pueda leer el sistema
y la pueda utilizar:
*/
import { Routes, RouterModule} from '@angular/router';

//Creamos una constante para almacenar las rutas de nuestro proyecto:
const routes: Routes =[
  //Para declarar nuestras rutas debemos de poner algunos atributos:
  {path:'',component:HomeComponent},
  {path:'admin/product',component:ProductListComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    HeaderAdminComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
//Agregamos la clase RouterModule para pasar el nombre de mi constante:
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
