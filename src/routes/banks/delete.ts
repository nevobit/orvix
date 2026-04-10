import type { Request, Response } from "express";

export const deleteBankRoute = {
    method: 'GET',
    url: '/banks',
    handler: (req: Request, res: Response) => {
        const {id} = req.params;
        res.json({message: 'bank delete' + id});
    }
}