import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserI } from '../../types';

@Entity()
export default class UserModel implements UserI {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  username: string;

  @Column('varchar', { length: 50 })
  password: string;
}
