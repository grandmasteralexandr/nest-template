import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('heals-check')
  getHealsCheck() {
    return 'Server is running';
  }
}
