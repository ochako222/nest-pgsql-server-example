import { DeleteResult } from 'typeorm';
import { DoctorModel } from '../models';
import { connection } from '../db/connections';
import { getRepo } from '../../helpers/db-helpers';
import { IDoctor } from '../../types';

const repo = getRepo(connection, DoctorModel);

class DoctorsRepository {
  public async getAll(): Promise<IDoctor[]> {
    const result = (await repo).find();
    return result;
  }

  public async getById(id: number): Promise<IDoctor | undefined> {
    const result = (await repo).findOne(id);
    return result;
  }

  public async createDoctor(doctor: IDoctor): Promise<IDoctor> {
    const result = (await repo).save(doctor);
    return result;
  }

  public async deleteById(id: number): Promise<DeleteResult> {
    const result = (await repo).delete(id);
    return result;
  }
}

export { DoctorsRepository };
