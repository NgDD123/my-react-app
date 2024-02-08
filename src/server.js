// server.js

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.post('/process-payment', async (req, res) => {
  try {
    // Use Mastercard API to process the payment
    // Include API credentials in the request headers
    const result = await axios.post('2ETLQUt5l-5A-jvo_4bhsoEbVUZ_B8uOzCb5CMvE53a198dc!83de3c224817494a884e5575044f72fe0000000000000000', req.body, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY',
      },
    });

    // Process the result and send a response to the client
    res.json(result.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
