import type { Request, Response} from "express";

export const updateBankRoute = {
    method: 'PATCH',
    url: '/banks/:id',
    handler: (req: Request, res: Response) => {
        const { id } = req.params;  
        const { name, address } = req.body;

        if (!name || !address) {
            return res.status(400).json({ error: 'Name and address are required' });
        }
        const newBank = { id: Date.now(), name, address };
        res.status(201).json({ message: 'bank update', bank: newBank });
    }
}