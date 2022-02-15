import {Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post} from "@nestjs/common";
import {UsersService} from "./users.service";
import {IUser} from "../types";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getAll(): Promise<IUser[]> {
        return await this.usersService.getAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getOne(@Param('id') id: number): Promise<IUser> {
        return await this.usersService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    async create(@Body() createDoctorDto: CreateUserDto): Promise<void> {
        return await this.usersService.create(createDoctorDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async remove(@Param('id') id: number): Promise<void> {
        return await this.usersService.delete(id);
    }

}
