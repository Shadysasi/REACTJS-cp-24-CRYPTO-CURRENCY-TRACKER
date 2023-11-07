import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, cryptoCurrenciesData: []}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(apiUrl)
    const fetchedData = await response.json()

    const updatedData = fetchedData.map(eachData => ({
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      euroValue: eachData.euro_value,
      id: eachData.id,
      usdValue: eachData.usd_value,
    }))
    this.setState({cryptoCurrenciesData: updatedData, isLoading: false})
  }

  renderCryptoCurrenciesList = () => {
    const {cryptoCurrenciesData} = this.state
    return <CryptocurrenciesList cryptoCurrenciesData={cryptoCurrenciesData} />
  }

  renderLoader = () => (
    <div>
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container" data-testid="loader">
        {isLoading ? this.renderLoader() : this.renderCryptoCurrenciesList()}
      </div>
    )
  }
}
export default CryptocurrencyTracker
