import paypal from '@paypal/paypal-server-sdk';

const config = useRuntimeConfig();

const environment = new paypal.core.SandboxEnvironment(config.paypalClientId, config.paypalClientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { orderId } = body;

  const request = new paypal.orders.OrdersCaptureRequest(orderId);
  request.prefer("return=representation");

  try {
    const capture = await client.execute(request);
    // Implement logic to fulfill order (e.g., send download link)
    console.log(`Capture result: ${JSON.stringify(capture.result, null, 2)}`);
    return { success: true, order: capture.result };
  } catch (error: any) {
    console.error('PayPal capture order error:', error);
    throw createError({ statusCode: 500, message: error.message });
  }
});
