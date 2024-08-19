import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
    console.error('OPENAI_API_KEY is not set');
    process.exit(1);
}

// Initialize OpenAI client
const openai = new OpenAI({
    apiKey: openaiApiKey
});

// Use `openai` for API calls as needed

export default openai;
