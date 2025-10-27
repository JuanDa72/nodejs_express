import dotenv from 'dotenv';

dotenv.config();

const config= { development: {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: '127.0.0.1',
  port: process.env.POSTGRES_PORT,
  dialect: 'postgres',
  logging: process.env.NODE_ENV !== 'production' ? console.log : false,
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    }
  }
}

console.log(config.development.username); // Para la prueba

export default config;