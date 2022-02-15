export interface IDoctor {
    id: number;
    phone: string;
    firstName: string;
    lastName: string;
}

export interface IUser {
    id: number;
    phone: string;
    firstName: string;
    lastName: string;
}


export interface ITimeSlot {
    id: number;
    doctorId: number;
    userId: number;
    timeStart: Date;
    timeEnd: Date;
}
