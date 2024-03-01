require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 3001;
const { fetchMemeCoinInfo } = require('./fetchers/fetcher');

app.use(express.json()); // Add parentheses after express.json

app.get('/api/meme-coins', async (req, res) => {
    try {
        const memeCoins = await fetchMemeCoinInfo();
        res.json(memeCoins);
    } catch (error) {
        console.error('Error fetching meme coin information:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/api/meme-coins/:id', async (req, res) => {
    try {
        const memeCoins = await fetchMemeCoinInfo();
        const id = parseInt(req.params.id);
        const memeCoin = memeCoins.find(coin => coin.id === id);
        if (!memeCoin) {
            res.status(404).json({ error: 'Meme coin not found' });
        } else {
            res.json(memeCoin);
        }
    } catch (error) {
        console.error('Error fetching meme coin information:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log("app is running on", PORT);
});
