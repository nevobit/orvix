import type { Request, Response } from "express";

export const listBookingsRoute = {
    method: 'GET',
    url: '/bookings',
    handler: (req: Request, res: Response) => {
        const bookings: any = [];
        res.status(200).json({bookings})
    }
}