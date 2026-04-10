import 'dotenv/config';
import pino from 'pino';
import { loadEnv } from './env.js';
import { buildApp } from './app.js';
import { initDataSources } from '../data-sources/index.js';

const logger = pino();

const main = async () => {
    const env = loadEnv();

    await initDataSources({ 
        mongoose: {
            mongoUri: env.MONGODB_URI,
            logger: logger
        },
    });

    const server = buildApp({ environment: env.ENVIRONMENT });

    const startPromise = server.listen({ port: env.APP_PORT});

    try {
        await startPromise;
        logger.info(`Server is running on port ${env.APP_PORT}`);
        logger.info("Press CTRL+C to stop the server");
    } catch (error) {
        logger.error('Error starting server:');
        process.exit(1);
    }
}

void main();

// SOLID Principles
// Single Responsibility Principle: Each module has a single responsibility. The env.ts file is responsible for loading environment variables, while app.ts is responsible for building the Express application. This separation allows for easier maintenance and testing.

// Open/Closed Principle: The code is open for extension but closed for modification. For example, if we want to add more environment variables, we can simply extend the loadEnv function without modifying existing code.

// Liskov Substitution Principle: This principle is not directly applicable in this context as we are not dealing with class hierarchies or inheritance.
// Interface Segregation Principle: This principle is not directly applicable in this context as we are not defining interfaces for clients to implement.
// Dependency Inversion Principle: The code does not depend on concrete implementations but rather on abstractions. For example, the buildApp function can be easily modified to use a different web framework without affecting the rest of the codebase.
