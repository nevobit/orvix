import type { Request, Response } from "express";


export const listBanksRoute = {
    method: 'GET',
    url: '/banks',
    handler: (req: Request, res: Response) => {
        const banks: any = [];
        res.status(200).json({banks})
    }
}