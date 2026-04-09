import type { Request, Response } from "express";

export const deleteProductRoute = {
    method: 'GET',
    url: '/products/:id/delete',
    handler: (req: Request, res: Response) => {
        const { id } = req.params;
        res.json({ message: 'Product deleted' + id });
    }
}