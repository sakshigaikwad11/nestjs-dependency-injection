
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import type { Product } from './products.service';
import { LoggerService } from '../logger/logger.service';
@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly logger: LoggerService,
  ) {}

  @Get()
  findAll(): Product[] {
    this.logger.log('Fetching all products');
    return this.productsService.findAll();
  }

  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number): Product {
    this.logger.log(`Fetching product ${id}`);
    return this.productsService.findById(id);
  }

  @Post()
  create(
    @Body() productData: { name: string; price: number },
  ): Product {
    const product = this.productsService.create(productData);
    this.logger.log(`Created product ${product.id}`);
    return product;
  }
}