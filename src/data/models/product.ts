import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ProductI } from '../../types';

@Entity()
export default class ProductModel implements ProductI {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 50 })
  name: string;

  @Column('varchar', { length: 50 })
  price: number;

  @Column('varchar', { length: 400 })
  imageUrl: string;

  @Column('varchar', { length: 50 })
  rating: number;
}
