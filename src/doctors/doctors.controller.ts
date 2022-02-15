import {
    Body,
    Controller,
    Delete,
    Get,
    Header,
    HttpCode,
    HttpStatus,
    Param,
    Post
} from '@nestjs/common';
import {CreateDoctorDto} from './dto/create-doctor.dto';
import {IDoctor} from '../types';
import {DoctorsService} from "./doctors.service";

@Controller('doctors')
export class DoctorsController {
    constructor(private readonly doctorsService: DoctorsService) {
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getAll(): Promise<IDoctor[]> {
        return await this.doctorsService.getAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getOne(@Param('id') id: number): Promise<IDoctor> {
        return await this.doctorsService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    async create(@Body() createDoctorDto: CreateDoctorDto): Promise<void> {
        return await this.doctorsService.create(createDoctorDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async remove(@Param('id') id: number): Promise<void> {
        return await this.doctorsService.delete(id);
    }
}
