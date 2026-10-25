// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World!';
//   }
// }
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  private users = [{ id: 1, name: 'John Doe' }];

  findById(id: number) {
    const user = this.users.find((item) => item.id === id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return user;
  }
}