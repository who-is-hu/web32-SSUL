import * as dotenv from 'dotenv';
dotenv.config();

export default {
  mode: process.env.NODE_ENV,
  port: process.env.PORT,
  database: {
    host: process.env.DB_HOST,
    dbname: process.env.DB_NAME,
    port: process.env.DB_PORT ?? 3306,
    username: process.env.DB_USERNAME ?? 'root',
    password: process.env.DB_PASSWORD,
  },
};
