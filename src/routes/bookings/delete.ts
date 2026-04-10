import type { Request, Response } from "express";

export const deleteBookingRoute = {
    method: 'GET',
    url: '/bookings/:id/delete',
    handler: (req: Request, res: Response) => {
        const {id} = req.params;
        res.json({message: 'booking delete' + id})
    }
}