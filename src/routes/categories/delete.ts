import type { Request, Response } from "express";

export const deleteCategorieRoute = {
    method: 'GET',
    url: '/categories/:id/delete',
    handler: (req: Request, res: Response) => {
        const {id} = req.params;
        res.json({message: 'categorie delete' + id});
    }
}