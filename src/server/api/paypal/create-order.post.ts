import paypal from '@paypal/paypal-server-sdk';

const config = useRuntimeConfig();

const environment = new paypal.core.SandboxEnvironment(config.paypalClientId, config.paypalClientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { productId, quantity, price } = body;

  // In a real application, fetch product details from a database based on productId
  const product = {
    id: productId,
    name: 'Digital Product', // Replace with actual product name
    description: 'A motivational digital product.',
    price: price, // Ensure price is passed correctly and in the right format (e.g., "19.99")
  };

  if (!product) {
    throw createError({ statusCode: 404, message: 'Product not found' });
  }

  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'EUR',
          value: (product.price * quantity).toFixed(2),
        },
        description: product.description,
      },
    ],
  });

  try {
    const order = await client.execute(request);
    return { id: order.result.id };
  } catch (error: any) {
    console.error('PayPal create order error:', error);
    throw createError({ statusCode: 500, message: error.message });
  }
});
