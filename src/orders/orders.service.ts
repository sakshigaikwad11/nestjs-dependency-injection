
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { ProductsService } from '../products/products.service';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class OrdersService {
  constructor(
    private readonly usersService: UsersService,
    private readonly productsService: ProductsService,
    private readonly logger: LoggerService,
  ) {}

  createOrder(userId: number, productId: number) {
    const user = this.usersService.findById(userId);
    const product = this.productsService.findById(productId);

    const order = {
      id: Date.now(),
      user,
      product,
      total: product.price,
      status: 'created',
    };

    this.logger.log(
      `Order created for user ${userId}, product ${productId}`,
    );

    return order;
  }
}