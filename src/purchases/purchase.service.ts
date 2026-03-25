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

  findOne(customerName: string): Purchase{
    const rawData = fs.readFileSync(filepath , 'utf-8');
    const data = JSON.parse(rawData) as Purchase[];
    const customer = data.find(d => d.customerName === customerName);
    if(!customer){
        throw new NotFoundException()
    }
    return customer
  }
}
