import Stripe from 'stripe';

const config = useRuntimeConfig();
const stripe = new Stripe(config.stripeSecretKey, {
  apiVersion: '2023-10-16',
});

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { productId, quantity } = body;

  // In a real application, fetch product details from a database
  const product = {
    id: productId,
    name: 'Digital Product', // Replace with actual product name
    price: 2000, // cents
    image: 'https://via.placeholder.com/150',
    description: 'A motivational digital product.',
  };

  if (!product) {
    throw createError({ statusCode: 404, message: 'Product not found' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: product.name,
              images: [product.image],
              description: product.description,
            },
            unit_amount: product.price,
          },
          quantity: quantity,
        },
      ],
      mode: 'payment',
      success_url: `${config.public.baseUrl}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${config.public.baseUrl}/shop/cancel`,
      metadata: {
        productId: product.id,
      },
    });

    return { url: session.url };
  } catch (error: any) {
    throw createError({ statusCode: 500, message: error.message });
  }
});
