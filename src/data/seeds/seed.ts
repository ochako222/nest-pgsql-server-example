import doctors from './doctors-init-state';
import users from './users-init-state'
import timeSlots from './time-slots-init-state'
import {IDoctor, ITimeSlot, IUser} from "../../types";
import {DoctorsService} from "../../doctors/doctors.service";
import {UsersService} from "../../users/users.service";
import {TimeSlotsService} from "../../time-slots/timeSlots.service";
import {timeSlotsRepository} from "../repositories";
import {getRandomDigit} from "../../helpers/utils";

const doctorsService = new DoctorsService()
const usersService = new UsersService()
const timeSlotsService = new TimeSlotsService()

console.log('Running seed...');
try {

    doctors.forEach((doctor: IDoctor) => {
        doctorsService.create(doctor);
    });

    users.forEach((user: IUser) => {
        usersService.create(user)
    })

    // timeSlots.forEach((timeSlot: ITimeSlot) => {
    //     timeSlotsService.create(timeSlot)
    // })

    timeSlots.forEach(async (timeSlot: ITimeSlot) => {
        await timeSlotsRepository.createTimeSlot({
            ...timeSlot,
            id: getRandomDigit(),
        });
    })


} catch (error: any) {
    throw new Error(error);
}
console.log('Seed completed');
