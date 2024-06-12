import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(email: string, password: string): Promise<UserEntity> {
    const user = this.userRepository.create({ email, password });
    return this.userRepository.save(user);
  }

  async findUserByEmail(email: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async findUserById(id: number): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({ where: { id } });
  }

  async login(email: string, password: string): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({ where: { email: email, password: password } });
  }
}
