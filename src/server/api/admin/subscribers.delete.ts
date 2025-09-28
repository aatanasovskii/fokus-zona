import { promises as fs } from 'fs';
import path from 'path';

const subscribersFilePath = path.resolve(process.cwd(), 'subscribers.json');

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email } = body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, message: 'Invalid email address.' });
  }

  let subscribers: string[] = [];
  try {
    const data = await fs.readFile(subscribersFilePath, 'utf8');
    subscribers = JSON.parse(data);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      subscribers = [];
    } else {
      console.error('Error reading subscribers file:', error);
      throw createError({ statusCode: 500, message: 'Failed to read subscriber data.' });
    }
  }

  const initialLength = subscribers.length;
  const updatedSubscribers = subscribers.filter(s => s !== email);

  if (updatedSubscribers.length === initialLength) {
    throw createError({ statusCode: 404, message: 'Subscriber not found.' });
  }

  try {
    await fs.writeFile(subscribersFilePath, JSON.stringify(updatedSubscribers, null, 2), 'utf8');
    return { message: 'Subscriber removed successfully.' };
  } catch (error) {
    console.error('Error writing subscribers file:', error);
    throw createError({ statusCode: 500, message: 'Failed to save subscriber data.' });
  }
});
