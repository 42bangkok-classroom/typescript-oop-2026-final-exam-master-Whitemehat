import { Controller, Get, UseFilters, UseInterceptors } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiExceptionFilter } from 'src/common/api-exception.filter';
import { ResponseInterceptor } from 'src/common/api-interceptor';
@Controller('products')
export class ProductController {
  constructor(private readonly ProductService: ProductService) {}
  @UseInterceptors(ResponseInterceptor)
  @UseFilters(ApiExceptionFilter)
  @Get()
  findAll() {
    return {
      success: true,
      data: this.ProductService.findAll(),
      message: 'Fetched products successfully',
    };
  }
}
