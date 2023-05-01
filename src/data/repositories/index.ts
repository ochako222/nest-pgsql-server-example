import { UsersRepository } from './users-repository';
import { ProductsRepository } from './products-repository';

const productsRepository = new ProductsRepository();
const usersRepository = new UsersRepository();

export { productsRepository, usersRepository };
