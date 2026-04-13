import { generateText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { rawPrompt } = await req.json();

    if (!rawPrompt || typeof rawPrompt !== 'string') {
      return new Response(JSON.stringify({ error: 'rawPrompt is required and must be a string' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.VITE_GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      throw new Error("Google Generative AI API key is missing. Please add GOOGLE_GENERATIVE_AI_API_KEY to your environment variables and redeploy.");
    }

    const google = createGoogleGenerativeAI({
      apiKey: apiKey,
    });

    const systemPrompt = `You are a prompt engineering expert. 
Your task is to take the user's raw instruction (which is meant for another AI to summarize a set of Trello cards) and heavily improve it. 

The underlying AI will be summarizing Trello project tasks based on creation/completion dates, titles, descriptions, constraints, and locations.
Rewrite the user's instructions into a highly optimized, single-paragraph system prompt constraint.
Ensure the rewritten prompt is directive, clear, and establishes the exact tone or focus the user requested.

DO NOT include any conversational text (e.g. "Here is your prompt"). Just return the optimized prompt itself.`;

    const { text } = await generateText({
      model: google('gemini-2.5-flash'),
      system: systemPrompt,
      prompt: `Raw user instruction to improve:\n\n${rawPrompt}`,
      temperature: 0.5,
    });

    return new Response(JSON.stringify({ improvedPrompt: text.trim() }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error("AI Improve Prompt error:", error);
    return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
