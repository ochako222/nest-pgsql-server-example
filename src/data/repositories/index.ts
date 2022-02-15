import {DoctorsRepository} from "./doctors-repository";
import {UsersRepository} from "./users-repository";
import {TimeSlotsRepository} from "./time-slots-repository";

const doctorsRepository = new DoctorsRepository();
const usersRepository = new UsersRepository();
const timeSlotsRepository = new TimeSlotsRepository()

export {doctorsRepository, usersRepository, timeSlotsRepository};
