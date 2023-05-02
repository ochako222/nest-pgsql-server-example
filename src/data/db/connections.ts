import { createConnection } from 'typeorm';

import { modelArray } from '../models';

const connection = createConnection({
  type: 'postgres',
  port: 5432,
  url: 'postgres://postgres:postgres@db:5432/db',
  entities: modelArray,
  synchronize: true,
});

export { connection };
