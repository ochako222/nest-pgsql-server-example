import { DeleteResult } from 'typeorm';
import { ProductModel } from '../models';
import { connection } from '../db/connections';
import { getRepo } from '../../helpers/db-helpers';
import { ProductI } from '../../types';

const repo = getRepo(connection, ProductModel);

class ProductsRepository {
  public async getAll(): Promise<ProductI[]> {
    const result = (await repo).find();
    return result;
  }

  public async getById(id: number): Promise<ProductI | undefined> {
    const result = (await repo).findOne(id);
    return result;
  }

  public async createProduct(product: ProductI): Promise<ProductI> {
    const result = (await repo).save(product);
    return result;
  }

  public async deleteById(id: number): Promise<DeleteResult> {
    const result = (await repo).delete(id);
    return result;
  }
}

export { ProductsRepository };
