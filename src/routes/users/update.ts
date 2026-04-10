import type { Request, Response} from "express";

export const updateUsersRoute = {
    method: 'PATCH',
    url: '/contacts/:id',
    handler: (req: Request, res: Response) => {
        const { id } = req.params;  
        const { name, password } = req.body;

        if (!name || !password) {
            return res.status(400).json({ error: 'name and password are required' });
        }
        const newUser = { id: Date.now(), name, password};
        res.status(201).json({ message: 'user update', bank: newUser });
    }
}