import { defineEventHandler, readBody, createError } from 'h3';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password'; // In a real application, use secure authentication (e.g., JWT, sessions)

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    return { success: true, message: 'Login successful.' };
  } else {
    throw createError({ statusCode: 401, message: 'Invalid credentials.' });
  }
});
