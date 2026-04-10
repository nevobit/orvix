import type { Request, Response } from "express";

export const listUsersRoute = {
    method: 'GET',
    url: '/users',
    handler: (req: Request, res: Response) => {
        const newUser: any = [];
        res.status(200).json({newUser})
    }
}