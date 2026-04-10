import { model } from "mongoose";
import { ProductSchemaMongo } from "../../contracts/models/products/product-mongo.js";

export const createProduct = async (name: string, price: number) => {
    const product = model("products", ProductSchemaMongo); //Obtenemos el modelo de producto para interactuar con la colección de productos en MongoDB
   
       const newProduct = new product({
        name,
        price
       }); //Creamos una nueva instancia del producto con los datos proporcionados
   
       const createdProduct = await newProduct.save(); //Guardamos el nuevo producto en la base de datos

       return createdProduct;
}