import { Connection, Repository } from "typeorm";

const getRepo = async (connection: Promise<Connection>, model:Function): Promise<Repository<any>> => {
  const con = await connection;
  return con.getRepository(model);
}

export {getRepo}
