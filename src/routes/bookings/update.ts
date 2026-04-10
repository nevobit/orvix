import type { Request, Response} from "express";

export const updateBookingRoute = {
    method: 'PATCH',
    url: '/bookings/:id',
    handler: (req: Request, res: Response) => {
        const {id} = req.params;
        const {name, price} = req.body;

        if (!name || !price) {
            res.status(400).json({error: 'name and price are required'});
        }
        const newBooking = {id: Date.now(), name, price};
        res.status(201).json({message: 'booking update', booking: newBooking})
    }
}