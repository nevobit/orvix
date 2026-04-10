import type { Request, Response } from "express";

export const listContactRoutes = {
    method: 'GET',
    url: '/contacts',
    handler: (req: Request, res: Response) => {
        const newContact: any = [];
        res.status(200).json({newContact})
    }
}