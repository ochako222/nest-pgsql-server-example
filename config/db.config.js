// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');

dotenv.config();

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT } =
  process.env;

module.exports = {
  database: DB_NAME || 'doctor',
  username: DB_USERNAME || 'postgres',
  password: DB_PASSWORD || 'postgres',
  host: DB_HOST || 'localhost',
  port: DB_PORT || '5432',
  dialect: DB_DIALECT || 'postgres',
  logging: false,
};
