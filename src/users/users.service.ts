import {Injectable} from '@nestjs/common';
import {getRandomDigit} from "../helpers/utils";
import {usersRepository} from "../data/repositories";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UsersService {

    async getAll() {
        return await usersRepository.getAll();
    }

    async getById(id: number) {
        return await usersRepository.getById(id);
    }

    async create(userDto: CreateUserDto) {
        await usersRepository.createUser({
            ...userDto,
            id: getRandomDigit(),
        });
    }

    async delete(id: number) {
        await usersRepository.deleteById(id)
    }
}
