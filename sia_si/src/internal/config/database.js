import { Sequelize } from 'sequelize';

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const nodeEnv = process.env.NODE_ENV;

if (!dbName || !dbUser || !dbPass || !dbHost || !dbPort) {
  console.error("ERROR: Faltan variables de entorno. Revisa tu archivo .env.");
  process.exit(1);
}

const sequelize = new Sequelize(
    process.env.DB_NAME || 'uni_db',
    process.env.DB_USER || 'root',
    process.env.DB_PASSWORD || '123456',
    {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3307,
        dialect: 'mysql',
        logging: process.env.NODE_ENV === 'development' ? console.log : false,
    }
);  

export const testConnection = async () => {
  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
  } catch (error) {
      console.error('Unable to connect to the database:', error);
  }
};

export default sequelize;