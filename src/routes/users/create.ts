import type { Request, Response } from "express";

export const createUsersRoute = {
    method: 'POST',
    url: "/users",
    handler: (req: Request, res: Response) => {
        const { name, password } = req.body;

        if (!name || !password) {
            return res.status(400).json({error: " name and password are required"});
        }
         
        const newUser = {id: Date.now(), name, password};
        res.status(201).json({message: 'user create', booking: newUser})
    }
}