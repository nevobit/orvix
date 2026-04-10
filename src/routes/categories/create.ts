import type { Request, Response } from "express";

export const createCategorieRoute = {
    method: 'POST',
    url: "/categories",
    handler: (req: Request, res: Response) => {
        const {price} = req.body;

        if (!price) {
            return res.status(400).json({error: " price are required"});
        }
         
        const newCategorie = {id: Date.now(), price};
        res.status(201).json({message: 'categorie create', booking: newCategorie})
    }
}