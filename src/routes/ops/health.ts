import type { Request, Response } from "express";

export const healthRoute = {
    method: 'GET', 
    url: '/health',
    handler: (req: Request, res: Response) => {
        res.status(200).json({ status: 'ok', uptime: process.uptime(), 
    });
  }
}