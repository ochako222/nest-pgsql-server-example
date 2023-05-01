import { Injectable } from '@nestjs/common';
import { productsRepository } from '../data/repositories';
import { getRandomDigit } from '../helpers/utils';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  async getAll() {
    return await productsRepository.getAll();
  }

  async getById(id: number) {
    return await productsRepository.getById(id);
  }

  async create(productDto: CreateProductDto) {
    await productsRepository.createProduct({
      ...productDto,
      id: getRandomDigit(),
    });
  }

  async delete(id: number) {
    await productsRepository.deleteById(id);
  }
}
