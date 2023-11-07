import { sql } from '@vercel/postgres';
import { NextApiResponse, NextApiRequest } from 'next';
 
export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  if (request.method === 'GET') {
    const questions = await sql`SELECT * FROM Questions ORDER BY id DESC LIMIT 100;`;
    return response.status(200).json({ questions });
  }

  if (request.method === 'POST') {
    try {
      console.log(request.body);
      const question = request.body.question as string;
      if (!question) throw new Error('question required');
      const timestamp = new Date().toISOString();
      await sql`INSERT INTO Questions (question, postedOn, status) VALUES (${question}, ${timestamp}, false);`;
    } catch (error) {
      console.log(error);
      return response.status(500).json({ error });
    }
   
    const questions = await sql`SELECT * FROM Questions;`;
    return response.status(200).json({ questions });
  }

  if (request.method === 'PUT') {
    try {
      const id = request.body.id as string;
      if (!id) throw new Error('id required');
      await sql`UPDATE Questions SET status = true WHERE id = ${id};`;
    } catch (error) {
      return response.status(500).json({ error });
    }
   
    const questions = await sql`SELECT * FROM Questions;`;
    return response.status(200).json({ questions });
  }

  if (request.method === 'DELETE') {
    try {
      const id = request.body.id as string;
      if (!id) throw new Error('id required');
      await sql`DELETE FROM Questions WHERE id = ${id};`;
    } catch (error) {
      return response.status(500).json({ error });
    }
   
    const questions = await sql`SELECT * FROM Questions;`;
    return response.status(200).json({ questions });
  }
}