import {Body, Controller, Delete, Get, Header, HttpCode, HttpStatus, Param, Post, Req, Res} from "@nestjs/common";
import {ITimeSlot} from "../types";
import {TimeSlotsService} from "./timeSlots.service";
import {CreateTimeSlotDto} from "./dto/create-time-slot.dto";
import express, {Request, Response} from 'express';

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
    @Header('Cache-Control', 'none')
    async create(@Body() createTimeSlotDto: CreateTimeSlotDto, @Req() req: Request, @Res() res: Response): Promise<void | { message: string; }> {
        const response = await this.timeSlotsService.create(createTimeSlotDto);
        if (response.message) res.status(401).json(response.message)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async remove(@Param('id') id: number): Promise<void> {
        return await this.timeSlotsService.delete(id);
    }

}
