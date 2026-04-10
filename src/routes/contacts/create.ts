import type { Request, Response } from "express";

export const createContactRoutes = {
    method: 'POST',
    url: "/contacts",
    handler: (req: Request, res: Response) => {
        const { name, correo } = req.body;

        if (!name || !correo) {
            return res.status(400).json({error: " name and correo are required"});
        }
         
        const newContact = {id: Date.now(), name, correo};
        res.status(201).json({message: 'contact create', booking: newContact})
    }
}