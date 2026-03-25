import * as fs from 'fs';
import { Purchase } from './purchase.interface';

const filepath = './data/purchases.json';
export class PurchaseService {
  findAll(customerName?: string) {
    const rawData = fs.readFileSync(filepath, 'utf-8');
    const data = JSON.parse(rawData) as Purchase[];
    if (customerName) {
      return data.find((d) => d.customerName === customerName);
    }
    return data;
  }

  findOne(id: number) {
    const rawData = fs.readFileSync(filepath, 'utf-8');
    const data = JSON.parse(rawData) as Purchase[];
    const customer = data.find((d) => d.id === id);
    if (!customer) {
      return null;
    }
    return customer;
  }
}
