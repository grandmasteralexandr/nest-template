import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  getMe() {
    return 'this.userService';
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update')
  update() {
    return 'this.userService';
  }
}
