import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseInterceptor } from 'src/common/api-interceptor';

@Controller('products')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}
  @UseInterceptors(ResponseInterceptor)
  @Get()
  findAll() {
    return {
      success: true,
      data: this.ProductService.findAll(),
      message: 'Fetched products successfully',
    };
  }
}
