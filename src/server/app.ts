import express, { type Express } from 'express';
import cors from 'cors';
import type { BuildAppOptions } from './types.js';
import { registerRoutes } from '../routes/index.js';

const corsOptions = {
  origin: ['http://orvix.com', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
}

export const buildApp = (opts: BuildAppOptions): Express => {
    const app = express();
    
    app.use(cors(corsOptions));
    app.use(registerRoutes(app));

    return app;
}
