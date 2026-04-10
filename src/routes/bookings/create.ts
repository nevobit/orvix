import type { Request, Response } from "express";

export const createBookingRoute = {
    method: 'POST',
    url: "/bookings",
    handler: (req: Request, res: Response) => {
        const { name, price} = req.body;

        if (!name || !price) {
            return res.status(400).json({error: "Name and price are required"});
        }
         
        const newBooking = {id: Date.now(), name, price};
        res.status(201).json({message: 'booking create', booking: newBooking})
    }
}