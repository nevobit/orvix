import type { Request, Response } from "express";
import { createProduct } from "../../business-logic/products/create.js";

export const createProductRoute = {
    method: 'POST',
    url: '/products',
    handler: async (req: Request, res: Response) => {
        console.log(req.body);
        const { name, price } = req.body;

        if (!name || !price) {
            return res.status(400).json({ error: 'Name and price are required' });
        }
        
        const newProduct = await createProduct(name, price);

        res.status(201).json({ message: 'Product created', product: newProduct });
    }
}