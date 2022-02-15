export class CreateTimeSlotDto {
    readonly id: number;
    readonly doctorId: number;
    readonly userId: number;
    readonly timeStart: Date;
    readonly timeEnd: Date;
}
