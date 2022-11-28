
const requests = {
    fetchMarket: `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
}

export default requests


//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
// [
//     {
//       "id": "bitcoin",
//       "symbol": "btc",
//       "name": "Bitcoin",
//       "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
//       "current_price": 16612.48,
//       "market_cap": 319300458065,
//       "market_cap_rank": 1,
//       "fully_diluted_valuation": 348921627982,
//       "total_volume": 19137732191,
//       "high_24h": 16670.75,
//       "low_24h": 16437.64,
//       "price_change_24h": 174.83,
//       "price_change_percentage_24h": 1.06361,
//       "market_cap_change_24h": 3316939647,
//       "market_cap_change_percentage_24h": 1.04972,
//       "circulating_supply": 19217237,
//       "total_supply": 21000000,
//       "max_supply": 21000000,
//       "ath": 69045,
//       "ath_change_percentage": -75.93071,
//       "ath_date": "2021-11-10T14:24:11.849Z",
//       "atl": 67.81,
//       "atl_change_percentage": 24407.93814,
//       "atl_date": "2013-07-06T00:00:00.000Z",
//       "roi": null,
//       "last_updated": "2022-11-26T10:24:37.557Z"
//     },