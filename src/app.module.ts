import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import {DoctorsController} from './doctors/doctors.controller';
import {DoctorsService} from './doctors/doctors.service';
import {UsersController} from "./users/users.controller";
import {UsersService} from "./users/users.service";
import {TimeSlotsService} from "./time-slots/timeSlots.service";
import {TimeSlotsController} from "./time-slots/timeSlots.controller";

@Module({
    imports: [],
    controllers: [DoctorsController, UsersController, TimeSlotsController],
    providers: [DoctorsService, UsersService, TimeSlotsService],
})
export class AppModule {
}
