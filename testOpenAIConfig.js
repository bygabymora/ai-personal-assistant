const { OpenAI } = require('openai');

const openai = new OpenAI();

async function testOpen() {
  try {
    const messages = [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Hello, how are you today?' },
    ];
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
    });
    console.log('Response:', response.data.choices[0].message.content);
  } catch (error) {
    console.error(
      'Error:',
      error.response ? error.response.data : error.message
    );
  }
}

testOpen();
