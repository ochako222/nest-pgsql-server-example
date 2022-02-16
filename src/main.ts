import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as fs from "fs";
import {TimeSlotsService} from "./time-slots/timeSlots.service";
import {UsersService} from "./users/users.service";
import {DoctorsService} from "./doctors/doctors.service";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}

bootstrap();


const foo = async () => {
    fs.unlink('logs.txt', (error) => {
        if (error) return;
        console.log('Previous logs are removed')
    })

    const timeSlotsService = new TimeSlotsService()
    const userService = new UsersService()
    const doctorService = new DoctorsService()

    const slots = await timeSlotsService.getAll();
    const now = new Date();

    for (const elem of slots) {
        // @ts-ignore
        let diffInMilliSeconds = Math.abs(elem.timeStart - now) / 1000;
        const days = Math.floor(diffInMilliSeconds / 86400);
        diffInMilliSeconds -= days * 86400;

        if (days == 1) {
            const user = await userService.getById(elem.userId)
            const doctor = await doctorService.getById(elem.doctorId)
            const message = `\n${ now.toUTCString() } | Привет, ${ user.firstName } ${ user.lastName }! Напоминаем что вы записаны к ${ doctor.firstName } завтра в ${ elem.timeStart.toUTCString() }!`
            fs.appendFile('logs.txt', message, (error) => {
                if (error) throw error;
            })
        } else if (days == 0) {
            const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
            if (hours == 2) {
                const user = await userService.getById(elem.userId)
                const doctor = await doctorService.getById(elem.doctorId)
                const message = `\n${ now.toUTCString() } | Привет, ${ user.firstName } ${ user.lastName }! Вам через 2 часа к ${ doctor.firstName } в ${ elem.timeStart.toUTCString() }!`

                fs.appendFile('logs.txt', message, (error) => {
                    if (error) throw error;
                })
            }
        }
    }
}

foo()
