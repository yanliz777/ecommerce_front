/*
Acá creamos una clase identica con los mismo atributos que tenemos en la
clase Product del backend. Esto para que cuando nosotros hagamos consumo 
de la API rest podamos poner en esta clase el objeto producto y cada uno de sus atributos:
*/
export class Product {

    /*
    Al poner los atributo en este constructor indicamos que  las varibales
    hacen parte de la clase:
    */
    constructor(
        public id:number,
        public name: string,
        public code: string,
        public description: String,
        public price: number,
        public urlImage: string ,
        public image: File,//Atributo de más
        public  userId: string ,//Representa la realción del usuario con el producto
        public  categoryId: string,//Representa la relación de la categoria con el producto
    ){}
}
