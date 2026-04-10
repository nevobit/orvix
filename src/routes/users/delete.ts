import type { Request, Response } from "express";

export const deleteUsersRoute = {
    method: 'GET',
    url: '/users/:id/delete',
    handler: (req: Request, res: Response) => {
        const {id} = req.params;
        res.json({message: 'user delete' + id});
    }
}