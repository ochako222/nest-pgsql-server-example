import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IDoctor } from '../../types';

@Entity()
export default class DoctorModel implements IDoctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  phone: string;

  @Column('varchar', { length: 50 })
  firstName: string;

  @Column('varchar', { length: 50 })
  lastName: string;
}
