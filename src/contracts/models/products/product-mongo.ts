import { Schema } from "mongoose";
import { type Product } from "./product.js";

export const ProductSchemaMongo = new Schema<Product>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    lifecycleStatus: { type: String, enum: ['active', 'inactive', 'discontinued'], default: 'active' },
}, { timestamps: true });