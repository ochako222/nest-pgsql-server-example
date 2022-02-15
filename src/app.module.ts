import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsController } from './doctors/doctors.controller';
import { DoctorServices } from './doctors/doctors.service';

@Module({
  imports: [],
  controllers: [AppController, DoctorsController],
  providers: [AppService, DoctorServices],
})
export class AppModule {}
