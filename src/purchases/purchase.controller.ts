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
    return this.PurchaseService.findOne(+id);
  }
}
