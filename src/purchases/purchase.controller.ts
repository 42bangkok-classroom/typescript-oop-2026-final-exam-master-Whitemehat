import { Controller, Get, Param, Query } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller('purchases')
export class PurchaseController {
  constructor(private readonly PurchaseService: PurchaseService) {}
  @Get()
  findAll(@Query('customerName') customerName: string) {
    return {
      success: true,
      data: this.PurchaseService.findAll(customerName),
      message: 'Fetched purchases successfully',
    };
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return {
      success: this.PurchaseService.findOne(+id) ? true : false,
      data: this.PurchaseService.findOne(+id),
      message: this.PurchaseService.findOne(+id)
        ? 'Fetched purchases successfully'
        : `Purchase with id ${id} not found`,
    };
  }
}
