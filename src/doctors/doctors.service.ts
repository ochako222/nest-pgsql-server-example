import { Injectable } from '@nestjs/common';
import { doctorsRepository } from '../data/repositories';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { getRandomDigit } from "../helpers/utils";

@Injectable()
export class DoctorsService {

  async getAll() {
    return await doctorsRepository.getAll();
  }

  async getById(id: number) {
    return await doctorsRepository.getById(id);
  }

  async create(doctorDto: CreateDoctorDto) {
    await doctorsRepository.createDoctor({
      ...doctorDto,
      id: getRandomDigit(),
    });
  }

  async delete(id:number){
    await doctorsRepository.deleteById(id)
  }
}
