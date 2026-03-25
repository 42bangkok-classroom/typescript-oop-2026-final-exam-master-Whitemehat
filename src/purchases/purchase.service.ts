import * as fs from 'fs';
import { Purchase } from './purchase.interface';

const filepath = './data/purchases.json';
export class PurchaseService {
  findAll(): Purchase[] {
    const rawData = fs.readFileSync(filepath, 'utf-8');
    const data = JSON.parse(rawData) as Purchase[];
    return data;
  }
}
