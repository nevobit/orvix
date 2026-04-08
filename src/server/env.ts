import { cleanEnv, port, str } from 'envalid';

export const loadEnv = () => {
  return cleanEnv(process.env, {
    ENVIRONMENT: str({ choices: ['dev', 'stg', 'prod', ], default: 'unknown' }),
    PORT: port({ default: 8000 }) ,
    NODE_ENV: str({ default: 'unknown' }),
    REGION: str({ default: 'local' }),
  });
}