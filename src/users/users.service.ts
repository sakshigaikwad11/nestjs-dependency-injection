import { Injectable ,NotFoundException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Admin User',
      email: 'admin@example.com',
      role: 'admin',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'user',
    },
  ];

  findAll(role?: string) {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }
findById(id: number) {
  const user = this.users.find((item) => item.id === id);

  if (!user) {
    throw new NotFoundException(`User with ID ${id} not found`);
  }

  return user;
}
  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      ...createUserDto,
    };

    this.users.push(newUser);

    return newUser;
  }
}