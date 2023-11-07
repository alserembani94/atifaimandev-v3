import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    const question = request.query.question as string;
    if (!question) throw new Error('question required');
    const timestamp = new Date().toISOString();
    await sql`INSERT INTO Questions (question, postedOn, status) VALUES (${question}, ${timestamp}, false);`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const pets = await sql`SELECT * FROM Questions;`;
  return response.status(200).json({ pets });
}