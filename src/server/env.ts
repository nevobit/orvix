import { cleanEnv, port, str } from 'envalid';

export const loadEnv = () => {
  return cleanEnv(process.env, {
    ENVIRONMENT: str({ choices: ['dev', 'stg', 'prod', ], default: 'dev' }),
    NODE_ENV: str({ default: 'unknown' }),
    REGION: str({ default: 'local' }),

    APP_NAME: str({ default: 'orvix' }),
    APP_HOST: str({ default: 'localhost' }),
    APP_PORT: port({ default: 8000 }),
    LOG_LEVEL: str({ choices: ['trace', 'debug', 'info', 'warn', 'error', 'fatal'], default: 'info' }),

    MONGODB_URI: str({ default: 'mongodb://localhost:27017' }),
    DATABASE_NAME: str({ default: 'orvix' }),
  });
}