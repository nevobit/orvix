import type { Request, Response} from "express";

export const updateContactRoutes = {
    method: 'PATCH',
    url: '/contacts/:id',
    handler: (req: Request, res: Response) => {
        const { id } = req.params;  
        const { name, correo } = req.body;

        if (!name || !correo) {
            return res.status(400).json({ error: 'name and are required' });
        }
        const newContact = { id: Date.now(), name, correo};
        res.status(201).json({ message: 'contact update', bank: newContact });
    }
}