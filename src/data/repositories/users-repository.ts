import { DeleteResult } from 'typeorm';
import { connection } from '../db/connections';
import { getRepo } from '../../helpers/db-helpers';
import { IUser} from '../../types';
import UserModel from "../models/user";

const repo = getRepo(connection, UserModel);

class UsersRepository {
    public async getAll(): Promise<IUser[]> {
        const result = (await repo).find();
        return result;
    }

    public async getById(id: number): Promise<IUser | undefined> {
        const result = (await repo).findOne(id);
        return result;
    }

    public async createUser(user: IUser): Promise<IUser> {
        const result = (await repo).save(user);
        return result;
    }

    public async deleteById(id: number): Promise<DeleteResult> {
        const result = (await repo).delete(id);
        return result;
    }
}

export { UsersRepository };
