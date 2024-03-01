require('dotenv').config();

const axios = require('axios');

const API_KEY = process.env.CMC_APIKEY; 

async function fetchMemeCoinInfo() {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': API_KEY
            },
            params: {
                start: 1, // Start index for pagination
                limit: 100, // Number of results to retrieve (max 100)
                sort: 'market_cap', // Sort by market capitalization
                sort_dir: 'desc', // Sort direction (descending)
                convert: 'USD' // Convert prices to USD
            }
        });
        const memeCoins = response.data.data.filter(coin =>
            coin.tags.includes("memes") || coin.tags.includes("doggone-doggerel")
        );
        return memeCoins;

        // return response.data.data; // Assuming the meme coin data is under the 'data' property of the response
    } catch (error) {
        console.error('Error fetching meme coin information from CoinMarketCap:', error);
        throw error;
    }
}

module.exports = { fetchMemeCoinInfo };
