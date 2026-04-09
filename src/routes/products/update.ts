import type { Request, Response } from "express";

export const updateProductRoute = {
    method: 'PATCH',
    url: '/products/:id',
    handler: (req: Request, res: Response) => {
        const { id } = req.params;  
        const { name, price } = req.body;

        if (!name || !price) {
            return res.status(400).json({ error: 'Name and price are required' });
        }
        const newProduct = { id: Date.now(), name, price };
        res.status(201).json({ message: 'Product created', product: newProduct });
    }
}

//put update entire resource
//patch update part of the resource