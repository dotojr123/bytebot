import { Controller, Get, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ComputerUseService } from '../core/computer-use/computer-use.service';
import { ComputerAction } from '../utils/types/computerAction.types';

@Controller('api/v1/sandbox')
export class SandboxController {
  constructor(private readonly computerUseService: ComputerUseService) {}

  @Post('execute')
  @HttpCode(HttpStatus.OK)
  async execute(@Body() action: ComputerAction) {
    return await this.computerUseService.action(action);
  }

  @Get('status')
  getStatus() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}
