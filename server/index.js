import express from 'express';
import cors from 'cors';
import generate from './generate.js';

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3005;

app.get('/', (req, res) => {
    res.send('Hello from our API');
}); 

app.post('/generate', async (req, res) => {
    const queryDescription = req.body.queryDescription;
    console.log(`Received queryDescription: ${queryDescription}`); 
    try {
        if (!queryDescription) {
            return res.status(400).send('queryDescription is required');
        }
        const sqlQuery = await generate(queryDescription);
        res.json({ response: sqlQuery });
    } catch (error) {
        console.error('Error in /generate route:', error); 
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
