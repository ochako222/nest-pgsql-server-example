import {Injectable} from '@nestjs/common';
import {checkSlotAvailability, getRandomDigit} from "../helpers/utils";
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
        const {timeStart, timeEnd} = timeSlotDto
        const slot = {
            timeStart: new Date(timeStart),
            timeEnd: new Date(timeEnd)
        }

        const slots = await timeSlotsRepository.getAll();

        // @ts-ignore
        const sortedSlots = slots.slice().sort((a, b) => new Date(a.timeStart) - new Date(b.timeStart))

        const slotsList = sortedSlots.map(elem => {
            return {
                timeStart: new Date(elem.timeStart),
                timeEnd: new Date(elem.timeEnd)
            }
        })

        const result = checkSlotAvailability(slotsList, slot)

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
