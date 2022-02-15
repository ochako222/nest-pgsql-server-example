import {Injectable} from '@nestjs/common';
import {checkSlotAvailability, getRandomDigit} from "../helpers/utils";
import {timeSlotsRepository} from "../data/repositories";
import {CreateTimeSlotDto} from "./dto/create-time-slot.dto";
import {isArray} from "util";

@Injectable()
export class TimeSlotsService {

    async getAll() {
        return await timeSlotsRepository.getAll();
    }

    async getById(id: number) {
        return await timeSlotsRepository.getById(id);
    }

    async create(timeSlotDto: CreateTimeSlotDto) {
        const slots = await timeSlotsRepository.getAll();
        const result = checkSlotAvailability(slots, timeSlotDto)
        if (Array.isArray(result) && result.length) {
            await timeSlotsRepository.createTimeSlot({
                ...timeSlotDto,
                id: getRandomDigit(),
            });
        } else {
            return {
                message: 'This slot is busy'
            }
        }

    }

    async delete(id: number) {
        await timeSlotsRepository.deleteById(id)
    }
}
