import { Controller, Get, Param } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: number) {
    return {
        success: false,
        data: this.PurchaseService.findOne(+id) || null,
        message: this.PurchaseService.findOne(+id) ? 'Filtered purchases successfully': `Purchase with id ${id} not found`
      };
  }
}
