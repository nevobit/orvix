import { model } from "mongoose";
import { ProductSchemaMongo } from "../../contracts/models/products/product-mongo.js";

export const listProducts = async () => {
    const product = model("products", ProductSchemaMongo);

    const products = await product.find({ lifecycleStatus: 'active' });

    return products;
}