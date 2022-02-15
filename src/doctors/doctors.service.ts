import { Injectable } from '@nestjs/common';
import { doctorRepository } from '../data/repositories';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { getRandomDigit } from "../helpers/utils";

@Injectable()
export class DoctorServices {
  // private doctors: IDoctor[] = [
  //   {
  //     id: '1',
  //     phone: '123123',
  //     firstName: 'asdasd',
  //     lastName: 'asdas',
  //   },
  //   {
  //     id: '2',
  //     phone: '123123',
  //     firstName: 'asdasd',
  //     lastName: 'asdas',
  //   },
  // ];

  async getAll() {
    return await doctorRepository.getAll();
  }

  // getById(id: string) {
  //   return this.doctors.find((d) => d.id === id);
  // }
  //
  async create(doctorDto: CreateDoctorDto) {
    await doctorRepository.createDoctor({
      ...doctorDto,
      id: getRandomDigit(),
    });
  }
}
