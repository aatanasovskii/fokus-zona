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
  const productId = Number(event.context.params?.id);
  const body = await readBody(event);
  const updatedProductData: Partial<Product> = body;

  if (isNaN(productId)) {
    throw createError({ statusCode: 400, message: 'Invalid product ID.' });
  }

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

  const productIndex = products.findIndex(p => p.id === productId);

  if (productIndex === -1) {
    throw createError({ statusCode: 404, message: 'Product not found.' });
  }

  products[productIndex] = { ...products[productIndex], ...updatedProductData };

  try {
    await fs.writeFile(productsFilePath, JSON.stringify(products, null, 2), 'utf8');
    return products[productIndex];
  } catch (error) {
    console.error('Error writing products file:', error);
    throw createError({ statusCode: 500, message: 'Failed to save product data.' });
  }
});
