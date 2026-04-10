import type { Request, Response } from "express";

export const deleteContactRoutes = {
    method: 'GET',
    url: '/contacts/:id/delete',
    handler: (req: Request, res: Response) => {
        const {id} = req.params;
        res.json({message: 'contact delete' + id});
    }
}