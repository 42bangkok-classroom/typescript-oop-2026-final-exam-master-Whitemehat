import { Controller, Get, Query } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly PurchaseService: PurchaseService) {}
  @Get()
  findAll() {
    return {
      success: true,
      data: this.PurchaseService.findAll(),
      message: 'Fetched purchases successfully',
    };
  }

  @Get()
  findOne(@Query('customerName') customerName: string) {
    return {
      success: true,
      data: this.PurchaseService.findOne(customerName),
      message: 'Fetched purchases successfully',
    };
  }
}
