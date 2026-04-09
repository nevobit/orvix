import type { Request, Response } from "express";
import { listProducts } from "../../business-logic/products/index.js";

export const listProductsRoute = {
    method: 'GET',
    url: '/products',
    handler: (req: Request, res: Response) => {
        const products = listProducts();
        res.json({ products });
    }
}