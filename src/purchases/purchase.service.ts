import * as fs from 'fs';
import { Purchase } from './purchase.interface';
import { NotFoundException } from '@nestjs/common';

const filepath = './data/purchases.json';
export class PurchaseService {
  findAll(): Purchase[] {
    const rawData = fs.readFileSync(filepath, 'utf-8');
    const data = JSON.parse(rawData) as Purchase[];
    return data;
  }

  findOne(id : number){
    const rawData = fs.readFileSync(filepath, 'utf-8');
    const data = JSON.parse(rawData) as Purchase[];
    const customer = data.find((d) => d.id === id);
    if (!customer) {
        return {
            success: false,
            data: null,
            message: `Purchase with id ${id} not found`,
          };
    }
    return {
      success: true,
      data: customer,
      message: 'Fetched purchases successfully',
    };
  }
}
