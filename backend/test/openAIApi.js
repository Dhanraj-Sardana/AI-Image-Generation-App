import dotenv from 'dotenv';
dotenv.config();
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_API,
});
console.log("HI");


async function listModels() {
  const response = await openai.models.list();
  console.log(response.data.map(m => m.id));
}

listModels();
