
import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(
    @Body() body: { userId: number; productId: number },
  ) {
    return this.ordersService.createOrder(
      Number(body.userId),
      Number(body.productId),
    );
  }
}