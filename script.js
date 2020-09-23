const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]
let url = 'https://api.exchangeratesapi.io/latest?base='
let content = document.querySelector('.wrapper')
let selectElement

fetch(url)
.then(response => response.json())
.then(data => {
  console.log(data)
  let info = `

  <h1>Currency Converter</h1>

  <div id="container">

    <div class="currency-options">
      <label for="currency-selection">Choose Currency 1:
        <select id="currency-select1">
          <option value="">--Please Select A Currency--</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="HKD">HKD</option>
          <option value="ISK">ISK</option>
          <option value="PHP">PHP</option>
          <option value="DKK">DKK</option>
          <option value="HUF">HUF</option>
          <option value="CZK">CZK</option>
          <option value="AUD">AUD</option>
          <option value="RON">RON</option>
          <option value="SEK">SEK</option>
          <option value="IDR">IDR</option>
          <option value="INR">INR</option>
          <option value="BRL">BRL</option>
          <option value="RUB">RUB</option>
          <option value="HRK">HRK</option>
          <option value="JPY">JPY</option>
          <option value="THB">THB</option>
          <option value="CHF">CHF</option>
          <option value="SGD">SGD</option>
          <option value="PLN">PLN</option>
          <option value="BGN">BGN</option>
          <option value="TRY">TRY</option>
          <option value="CNY">CNY</option>
          <option value="NOK">NOK</option>
          <option value="NZD">NZD</option>
          <option value="ZAR">ZAR</option>
          <option value="USD">USD</option>
          <option value="MXN">MXN</option>
          <option value="ILS">ILS</option>
          <option value="GBP">GBP</option>
          <option value="KRW">KRW</option>
          <option value="MYR">MYR</option>
        </select>
      </label>

      <label for="currency-selection">Choose Currency 2:
        <select id="currency-select2">
          <option value="">--Please Select A Currency--</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="HKD">HKD</option>
          <option value="ISK">ISK</option>
          <option value="PHP">PHP</option>
          <option value="DKK">DKK</option>
          <option value="HUF">HUF</option>
          <option value="CZK">CZK</option>
          <option value="AUD">AUD</option>
          <option value="RON">RON</option>
          <option value="SEK">SEK</option>
          <option value="IDR">IDR</option>
          <option value="INR">INR</option>
          <option value="BRL">BRL</option>
          <option value="RUB">RUB</option>
          <option value="HRK">HRK</option>
          <option value="JPY">JPY</option>
          <option value="THB">THB</option>
          <option value="CHF">CHF</option>
          <option value="SGD">SGD</option>
          <option value="PLN">PLN</option>
          <option value="BGN">BGN</option>
          <option value="TRY">TRY</option>
          <option value="CNY">CNY</option>
          <option value="NOK">NOK</option>
          <option value="NZD">NZD</option>
          <option value="ZAR">ZAR</option>
          <option value="USD">USD</option>
          <option value="MXN">MXN</option>
          <option value="ILS">ILS</option>
          <option value="GBP">GBP</option>
          <option value="KRW">KRW</option>
          <option value="MYR">MYR</option>
        </select>
      </label>
    </div>

    <div class="convert-button">
      <label for="value">Value:</label>
        <input type="number"/>
        <input type="submit" id="submit" value="Convert"/>
    </div>

    <div class="result">
    </div>

  </div> `

  content.innerHTML = info

  //selectElement = document.querySelector('#currency-select1', '#currency-select2')
  selectElement = document.querySelector('#submit')
  submit.addEventListener('click', (event) => {
    let result = document.querySelector('.result')
    result.textContent = '${event.target.value}'
  })
})

