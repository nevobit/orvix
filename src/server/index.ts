import 'dotenv/config';
import express from 'express';
import pino from 'pino';
import { loadEnv } from './env.js';

const logger = pino();

const main = () => {
    const env = loadEnv();

    console.log(env.PORT);
    logger.info('Starting server...');
}

void main();