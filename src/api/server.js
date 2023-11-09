const express = require('express')

const app = express();

const port = process.env.PORT || 3000

// configure the OpenAI API 
const openai = require('openai')
openai.apikey = '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';

// endpoint for chatGPT 
app.use(express.json());

app.post('/chat_ai', async (req, res) => {
  const prompt = req.body.prompt;

  try {
    const response = await openai.Completion.create({
      engine: 'text-davinci-002',
      prompt: prompt,
      max_tokens: 50,
      n: 1,
      stop: null,
      temperature: 0.5,
    });

    res.json({ text: response.choices[0].text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }
});


// need a frontEnd to access this data 