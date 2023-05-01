import { DeleteResult } from 'typeorm';
import { connection } from '../db/connections';
import { getRepo } from '../../helpers/db-helpers';
import { UserI } from '../../types';
import UserModel from '../models/user';

const repo = getRepo(connection, UserModel);

class UsersRepository {
  public async getAll(): Promise<UserI[]> {
    const result = (await repo).find();
    return result;
  }

  public async getById(id: number): Promise<UserI | undefined> {
    const result = (await repo).findOne(id);
    return result;
  }

  public async createUser(user: UserI): Promise<UserI> {
    const result = (await repo).save(user);
    return result;
  }

  public async deleteById(id: number): Promise<DeleteResult> {
    const result = (await repo).delete(id);
    return result;
  }
}

export { UsersRepository };
