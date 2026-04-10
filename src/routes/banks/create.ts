import type { Request, Response } from "express";

export const createBankRoute = {method: 'POST',
    url: "/banks",
    handler: (req: Request, res: Response) => {
        const { name, address} = req.body;

        if (!name || !address) {
            return res.status(400).json({error: "Name and address are required"});
        }
         
        const newBank = {id: Date.now(), name, address};
        res.status(201).json({message: 'bank create', bank: newBank})
    }
}