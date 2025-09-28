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

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const newProduct: Omit<Product, 'id'> = body;

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

  const lastId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0;
  const productToAdd = { ...newProduct, id: lastId + 1 };
  products.push(productToAdd);

  try {
    await fs.writeFile(productsFilePath, JSON.stringify(products, null, 2), 'utf8');
    return productToAdd;
  } catch (error) {
    console.error('Error writing products file:', error);
    throw createError({ statusCode: 500, message: 'Failed to save product data.' });
  }
});
