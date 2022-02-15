import {DeleteResult} from 'typeorm';
import {connection} from '../db/connections';
import {getRepo} from '../../helpers/db-helpers';
import {ITimeSlot} from '../../types';
import TimeSlotModel from "../models/timeSlot";

const repo = getRepo(connection, TimeSlotModel);

class TimeSlotsRepository {
    public async getAll(): Promise<ITimeSlot[]> {
        const result = (await repo).find();
        return result;
    }

    public async getById(id: number): Promise<ITimeSlot | undefined> {
        const result = (await repo).findOne(id);
        return result;
    }

    public async createTimeSlot(timeSlot: ITimeSlot): Promise<ITimeSlot> {
        const result = (await repo).save(timeSlot);
        return result;
    }

    public async deleteById(id: number): Promise<DeleteResult> {
        const result = (await repo).delete(id);
        return result;
    }
}

export {TimeSlotsRepository};
