import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
@Controller('products')
export class ProductController {
  private readonly ProductService: ProductService;
  @Get()
  findAll() {
    return this.ProductService.findAll();
  }
}
