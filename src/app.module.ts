import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { LoggerModule } from './logger/logger.module';
import { ProductsService } from './products/products.service';

@Module({
  imports: [UsersModule, ProductsModule,LoggerModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
