import {Injectable} from '@nestjs/common';
import {isSlotAvailable, getRandomDigit} from "../helpers/utils";
import {timeSlotsRepository} from "../data/repositories";
import {CreateTimeSlotDto} from "./dto/create-time-slot.dto";

@Injectable()
export class TimeSlotsService {

    async getAll() {
        return await timeSlotsRepository.getAll();
    }

    async getAllByDoctorId(doctorId: number) {
        const slots = await timeSlotsRepository.getAll();
        return slots.filter(elem => elem.doctorId == doctorId)
    }


    async create(timeSlotDto: CreateTimeSlotDto) {
        const {timeStart, timeEnd} = timeSlotDto
        const slot = {
            timeStart: new Date(timeStart),
            timeEnd: new Date(timeEnd)
        }

        const slots = await timeSlotsRepository.getAll();

        const sortedSlots = slots.slice().sort((a, b) => +new Date(a.timeStart) - +new Date(b.timeStart))

        const slotsList = sortedSlots.map(elem => {
            return {
                timeStart: new Date(elem.timeStart),
                timeEnd: new Date(elem.timeEnd)
            }
        })

        const result = isSlotAvailable(slotsList, slot)

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
