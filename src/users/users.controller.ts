import { Body, Controller, Get, Module, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { LoggerModule } from 'src/logger/logger.module';
@Module({
  imports: [LoggerModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Query('role') role?: string) {
    return this.usersService.findAll(role);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}