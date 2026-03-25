import { Controller, Get } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly ProductService: PurchaseService) {}
  @Get()
  findAll() {
    return {
      success: true,
      data: this.ProductService.findAll(),
      message: 'Fetched purchases successfully',
    };
  }
}
