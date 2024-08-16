const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/news', async (req, res) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        country: 'us',
        apiKey: process.env.NEWS_API_KEY,
      },
    });

    res.json(response.data.articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
