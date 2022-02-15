import {Injectable} from '@nestjs/common';
import {getRandomDigit} from "../helpers/utils";
import {timeSlotsRepository} from "../data/repositories";
import {CreateTimeSlotDto} from "./dto/create-time-slot.dto";

@Injectable()
export class TimeSlotsService {

    async getAll() {
        return await timeSlotsRepository.getAll();
    }

    async getById(id: number) {
        return await timeSlotsRepository.getById(id);
    }

    async create(timeSlotDto: CreateTimeSlotDto) {
        await timeSlotsRepository.createTimeSlot({
            ...timeSlotDto,
            id: getRandomDigit(),
        });
    }

    async delete(id: number) {
        await timeSlotsRepository.deleteById(id)
    }
}
