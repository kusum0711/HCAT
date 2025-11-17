import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await User.find();
  }

  async findone(id: number): Promise<User | null> {
    const user = await User.findOneBy({ id });
    return user;
  }

  async findBy(query: object) {
    return await User.findOne(query);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await User.update({ id }, updateUserDto);
    return await User.findOneBy({ id });
  }

  async remove(id: number) {
    await User.delete({ id });
    return { deleted: true };
  }
}
