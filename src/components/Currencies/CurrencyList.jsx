import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import Currency from './Currency'

function CurrencyList() {

  let currencies = [
    {
        "id": "bitcoin",
        "symbol": "btc",
        "name": "Bitcoin",
        "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
        "current_price": 28847,
        "market_cap": 558695339217,
        "market_cap_rank": 1,
        "fully_diluted_valuation": 605822971707,
        "total_volume": 8071071486,
        "high_24h": 29304,
        "low_24h": 28485,
        "price_change_24h": -456.5046497680705,
        "price_change_percentage_24h": -1.55783,
        "market_cap_change_24h": -9309603508.111084,
        "market_cap_change_percentage_24h": -1.639,
        "circulating_supply": 19366387.0,
        "total_supply": 21000000.0,
        "max_supply": 21000000.0,
        "ath": 69045,
        "ath_change_percentage": -58.22766,
        "ath_date": "2021-11-10T14:24:11.849Z",
        "atl": 67.81,
        "atl_change_percentage": 42433.61037,
        "atl_date": "2013-07-06T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-05-07T10:17:30.909Z"
    },
    {
        "id": "ethereum",
        "symbol": "eth",
        "name": "Ethereum",
        "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
        "current_price": 1903.79,
        "market_cap": 229125001825,
        "market_cap_rank": 2,
        "fully_diluted_valuation": 229125001825,
        "total_volume": 9756987603,
        "high_24h": 1935.8,
        "low_24h": 1874.12,
        "price_change_24h": -28.58284803634956,
        "price_change_percentage_24h": -1.47915,
        "market_cap_change_24h": -3603213838.4880676,
        "market_cap_change_percentage_24h": -1.54825,
        "circulating_supply": 120344574.703444,
        "total_supply": 120344574.703444,
        "max_supply": null,
        "ath": 4878.26,
        "ath_change_percentage": -60.94067,
        "ath_date": "2021-11-10T14:24:19.604Z",
        "atl": 0.432979,
        "atl_change_percentage": 439971.3664,
        "atl_date": "2015-10-20T00:00:00.000Z",
        "roi": {
            "times": 87.23626033191995,
            "currency": "btc",
            "percentage": 8723.626033191995
        },
        "last_updated": "2023-05-07T10:17:27.523Z"
    },
    {
        "id": "tether",
        "symbol": "usdt",
        "name": "Tether",
        "image": "https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663",
        "current_price": 1.001,
        "market_cap": 82161040993,
        "market_cap_rank": 3,
        "fully_diluted_valuation": 82161040993,
        "total_volume": 21236797972,
        "high_24h": 1.013,
        "low_24h": 0.994068,
        "price_change_24h": 0.00023352,
        "price_change_percentage_24h": 0.02333,
        "market_cap_change_24h": -48520416.27581787,
        "market_cap_change_percentage_24h": -0.05902,
        "circulating_supply": 82078431886.1561,
        "total_supply": 82078431886.1561,
        "max_supply": null,
        "ath": 1.32,
        "ath_change_percentage": -24.35375,
        "ath_date": "2018-07-24T00:00:00.000Z",
        "atl": 0.572521,
        "atl_change_percentage": 74.8184,
        "atl_date": "2015-03-02T00:00:00.000Z",
        "roi": null,
        "last_updated": "2023-05-07T10:15:00.708Z"
    },
  ]


  return (
    <div className=''>
      <div className="px-4 py-2 flex gap-4 items-center">
        <FontAwesomeIcon className='text-white w-[22px] h-[22px]' icon={faMagnifyingGlass} />
        <input type="text" placeholder='Search Currency...' className='border-orange-300 outline-none border-2 text-white bg-ndark py-5 px-3.5 w-full rounded-xl h-[30px]' />
      </div>

      <div className="flex flex-col mt-2 bg-ndark">
        {currencies.map((currency, index) => (
          <Currency key={index} {...currency} />
        ))}
      </div>
    </div>
  )
}

export default CurrencyList