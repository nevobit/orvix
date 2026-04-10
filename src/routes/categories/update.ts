import type { Request, Response} from "express";

export const updatecategorieRoute = {
    method: 'PATCH',
    url: '/categories/:id',
    handler: (req: Request, res: Response) => {
        const { id } = req.params;  
        const { price } = req.body;

        if (!price) {
            return res.status(400).json({ error: 'price are required' });
        }
        const newCategorie = { id: Date.now(), price};
        res.status(201).json({ message: 'bank update', bank: newCategorie });
    }
}