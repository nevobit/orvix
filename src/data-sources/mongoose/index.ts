import mongoose from "mongoose"; 
import pino from "pino";

export interface InitMongooseOptions {
    mongoUri: string;
    logger: pino.Logger<never, boolean>
}

export const initMongoose = async ({ mongoUri, logger }: InitMongooseOptions) => {
    if(!mongoUri) {
        throw new Error('MONGODB_URI is not defined');
    }

    const connection = mongoose.connection;

    connection.on('connected', () => {
        logger.info(`Mongoose connected to ${connection.name} at ${connection.host}:${connection.port}`);
    });

    connection.on('error', (err) => {
        logger.error('Mongoose connection error:', err);
    });

    await mongoose.connect(mongoUri);

}