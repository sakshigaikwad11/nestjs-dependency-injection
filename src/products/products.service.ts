
import { Injectable, NotFoundException } from '@nestjs/common';

export interface Product {
  id: number;
  name: string;
  price: number;
}

@Injectable()
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: 'Pizza', price: 250 },
    { id: 2, name: 'Burger', price: 150 },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findById(id: number): Product {
    const product = this.products.find((item) => item.id === id);

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return product;
  }

  create(productData: Omit<Product, 'id'>): Product {
    const newProduct: Product = {
      id:
        this.products.length > 0
          ? Math.max(...this.products.map((item) => item.id)) + 1
          : 1,
      ...productData,
    };

    this.products.push(newProduct);
    return newProduct;
  }
}