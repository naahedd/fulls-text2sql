import {Configuration, OpenAIApi} from 'openapi';
import dotenv from 'dotenv'
dotenv.config();

const openaiApiKey = process.env.OPENAI_API_KEY

if (!openaiApiKey){
    console.error('OPEN_AI_KEY is not set')
    process.exit(1)
}

const configuration = new Configuration({
    apiKey: openaiApiKey
})
const openai = new OpenAIApi(configuration)



export default openai;










