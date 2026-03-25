import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}
  @Get()
  findAll() {
    return {
      success: true,
      data: this.ProductService.findAll(),
      message: 'Fetched products successfully',
    };
  }
}
