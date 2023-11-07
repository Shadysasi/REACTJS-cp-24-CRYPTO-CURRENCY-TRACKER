import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoData

  return (
    <li className="cryptocurrencies-item">
      <div className="logo-title-box" data-testid="loader">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currencies-box">
        <p className="currency-value">{euroValue}</p>
        <p className="currency-value">{usdValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
