import { promises as fs } from 'fs';
import path from 'path';

const productsFilePath = path.resolve(process.cwd(), 'products.json');

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

export default defineEventHandler(async () => {
  let products: Product[] = [];
  try {
    const data = await fs.readFile(productsFilePath, 'utf8');
    products = JSON.parse(data);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      products = [];
    } else {
      console.error('Error reading products file:', error);
      throw createError({ statusCode: 500, message: 'Failed to read product data.' });
    }
  }
  return products;
});
