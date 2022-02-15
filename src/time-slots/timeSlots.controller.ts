import {Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post} from "@nestjs/common";
import {ITimeSlot} from "../types";
import {TimeSlotsService} from "./timeSlots.service";
import {CreateTimeSlotDto} from "./dto/create-time-slot.dto";

@Controller('time-slots')
export class TimeSlotsController {

    constructor(private readonly timeSlotsService: TimeSlotsService) {
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    async getAll(): Promise<ITimeSlot[]> {
        return await this.timeSlotsService.getAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async getOne(@Param('id') id: number): Promise<ITimeSlot> {
        return await this.timeSlotsService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    async create(@Body() createTimeSlotDto: CreateTimeSlotDto): Promise<void> {
        return await this.timeSlotsService.create(createTimeSlotDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async remove(@Param('id') id: number): Promise<void> {
        return await this.timeSlotsService.delete(id);
    }

}
