import type { Request, Response } from "express";

export const listCategoriesRoute = {
    method: 'GET',
    url: '/categories',
    handler: (req: Request, res: Response) => {
        const newCategorie: any = [];
        res.status(200).json({newCategorie})
    }
}