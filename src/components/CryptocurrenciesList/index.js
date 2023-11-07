import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptoCurrenciesData} = props

  return (
    <div className="cryptocurrencies-container">
      <h1 className="title">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        className="cryptocurrency-img"
        alt="cryptocurrency"
      />
      <div className="crypto-list-container">
        <div className="list-header">
          <p className="coin-value-text">Coin Type</p>
          <div className="currencies-container">
            <p className="currencies-text">USD</p>
            <p className="currencies-text">EURO</p>
          </div>
        </div>
        <ul className="cryptocurrencies-list">
          {cryptoCurrenciesData.map(eachData => (
            <CryptocurrencyItem cryptoData={eachData} key={eachData.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default CryptocurrenciesList
