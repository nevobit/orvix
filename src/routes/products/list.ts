import type { Request, Response } from "express";
import { listProducts } from "../../business-logic/products/index.js";

export const listProductsRoute = {
    method: 'GET',
    url: '/products',
    handler: async (req: Request, res: Response) => {
        const products = await listProducts();
        res.json({ products });
    }
}