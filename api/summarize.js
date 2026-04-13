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
    const { cardsData, periodLabel, diffDays } = await req.json();

    if (!cardsData || !Array.isArray(cardsData)) {
      return new Response(JSON.stringify({ error: 'cardsData is required and must be an array' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Try multiple standard env var names to improve reliability.
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.VITE_GOOGLE_GENERATIVE_AI_API_KEY;

    if (!apiKey) {
      throw new Error("Google Generative AI API key is missing. Please add GOOGLE_GENERATIVE_AI_API_KEY to your environment variables and redeploy.");
    }

    const google = createGoogleGenerativeAI({
      apiKey: apiKey,
    });

    const systemPrompt = `You are an AI assistant built into a dashboard for Trello.
Your task is to analyze a set of Trello cards created and completed over the period: "${periodLabel}".
Provide a concise, single-paragraph summary of these cards.

The summary MUST cover the following:
1. The volume of cards (created vs completed).
2. The type or trends of task descriptions & labels.
3. Highlight any cards with significant interest and activity (look at comments count, number of members, etc.).
4. If location coordinates are available for any cards, summarize where the activity is concentrated.
5. If the analyzed period is longer than 1 month (${diffDays} days), include a quick week-over-week trend summary.

Keep the response to exactly one comprehensive paragraph. It will be displayed at the top of a statistics page. Do not include greetings. Use Markdown formatting for emphasis.`;

    const userPrompt = `Here is the raw data (JSON) of the cards in this period:
${JSON.stringify(cardsData)}`;

    const { text } = await generateText({
      model: google('gemini-2.5-flash'),
      system: systemPrompt,
      prompt: userPrompt,
      temperature: 0.7,
    });

    return new Response(JSON.stringify({ summary: text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
    
  } catch (error) {
    console.error("AI Summarization error:", error);
    return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
