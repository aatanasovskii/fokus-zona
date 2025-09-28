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

  const initialLength = products.length;
  const updatedProducts = products.filter(p => p.id !== productId);

  if (updatedProducts.length === initialLength) {
    throw createError({ statusCode: 404, message: 'Product not found.' });
  }

  try {
    await fs.writeFile(productsFilePath, JSON.stringify(updatedProducts, null, 2), 'utf8');
    return { message: 'Product deleted successfully.' };
  } catch (error) {
    console.error('Error writing products file:', error);
    throw createError({ statusCode: 500, message: 'Failed to save product data.' });
  }
});
