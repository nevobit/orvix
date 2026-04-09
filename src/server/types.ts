import type { Request, Response } from "express";

export type Environment = 'dev' | 'stg' | 'prod';

export interface BuildAppOptions {
    environment: Environment;
    apiPrefix?: string;
}

export interface RouteOptions {
    method: string;
    url: string;
    handler: (req: Request, response: Response) => void;
}