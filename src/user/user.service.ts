import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }

  create(user: Partial<User>) {
    const userEntity = this.userRepository.create(user);
    return this.userRepository.save(userEntity);
  }

  update(user: Partial<User>) {
    return this.userRepository.update({ id: user.id }, user);
  }
}
