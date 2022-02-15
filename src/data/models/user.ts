import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IUser} from '../../types';

@Entity()
export default class UserModel implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 50 })
    phone: string;

    @Column('varchar', { length: 50 })
    firstName: string;

    @Column('varchar', { length: 50 })
    lastName: string;
}
