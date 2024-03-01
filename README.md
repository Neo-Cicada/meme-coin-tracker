## Meme Coin Fetcher

### Description

Meme Coin Fetcher is a Node.js package that allows you to retrieve information about meme coins from CoinMarketCap's API.

### Installation

```bash
npm i @neo-cicada/meme-coin-tracker
```

### Usage

```javascript
const { fetchMemeCoinInfo } = require('meme-coin-fetcher');

async function getMemeCoins() {
    try {
        const memeCoins = await fetchMemeCoinInfo();
        console.log(memeCoins);
    } catch (error) {
        console.error('Error fetching meme coin information:', error);
    }
}

getMemeCoins();
```

### API

#### fetchMemeCoinInfo()

This function retrieves information about meme coins from CoinMarketCap's API.

- Returns: An array of meme coins with their information.

### Endpoints

#### Express Endpoints

If you're building a server-side application, you can use the provided Express endpoints to fetch meme coin information.

- `GET /api/meme-coins`: Retrieves information about all meme coins.
- `GET /api/meme-coins/:id`: Retrieves information about a specific meme coin by ID.

Example usage:

```bash
curl http://localhost:3001/api/meme-coins
```

### Dependencies

- axios
- dotenv
- express

### License

This package is licensed under the MIT License.
