import { createConnection } from 'typeorm';

import {
  database,
  username,
  password,
  host,
  port,
} from '../../../config/db.config';

import { modelArray } from '../models';

const connection = createConnection({
  type: 'postgres',
  host: host,
  port: Number(port),
  username,
  password,
  database,
  logging: false,
  entities: modelArray,
  synchronize: true,
});

export { connection };
