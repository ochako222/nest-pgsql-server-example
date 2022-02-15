import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { DoctorServices } from './doctors.service';
import { IDoctor } from '../types';
import { doctorService } from '../services';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorService: DoctorServices) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll(): Promise<IDoctor[]> {
    return await doctorService.getAll();
  }

  // @Get(':id')
  // getOne(@Param('id') id: string): IDoctor {
  //   return this.doctorService.getById(id);
  // }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  async create(@Body() createDoctorDto: CreateDoctorDto): Promise<void> {
    return await doctorService.create(createDoctorDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string): string {
  //   return 'Remove: ' + id;
  // }
  //
  // @Put(':id')
  // update(@Body() updateProductDto: UpdateDoctorDto, @Param('id') id: string) {
  //   return 'Update: ' + id;
  // }
}
