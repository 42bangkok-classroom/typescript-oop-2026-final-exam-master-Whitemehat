import * as fs from 'fs';
import { Product } from './product.interface';

const filepath = './data/products.json';
export class ProductService {
  findAll(): Product[] {
    const rawData = fs.readFileSync(filepath, 'utf-8');
    const data = JSON.parse(rawData) as Product[];
    return data;
  }
}
