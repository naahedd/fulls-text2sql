import openaiClient from './api.js';

const generate = async (queryDescription) => {

    const chatGptApi = async (queryDescription) => {
        const messages = [
            { role: 'system', content: `You are a translator from plain English to SQL`},
            { role: 'user', content: `Convert the following natural language description into a SQL query: \n\nshow all elements from the table user`},
            { role: 'assistant', content: `SELECT * FROM users;` },
            { role: 'user', content: `Convert the following natural language description into a SQL query: \n\n${queryDescription}.` }
        ];
        const response = await openaiClient.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: messages,
        })
        console.log('Successfully made request to OpenAI API'); 
        return response.data.choices[0].message.content;
    };

    return await chatGptApi(queryDescription)
    
};

export default generate;