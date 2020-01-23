import * as dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV;

export const config = {
  serverPort: parseInt(process.env.SERVER_PORT, 0) || 5000,
  db: {
    database: process.env['DB_DATABASE_' + env],
    host: process.env['DB_HOST_' + env],
    password: process.env['DB_PASSWORD_' + env],
    username: process.env['DB_USERNAME_' + env],
  },
};
