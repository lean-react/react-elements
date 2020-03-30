// Main Entry Point

import {getDefaultCurrency, setDefaultCurrency} from './util/default-currency.js';
import {getRates} from './util/rates-api.js';

import ratesHeaderElt from './components/rates-header.js';
import currencyListElt from './components/currency-list.js';
import ratesElt from './components/rates.js';

function renderUI() {

  const baseCurrency = getDefaultCurrency();
  getRates(baseCurrency).then( data => {

    const currencies = Object.keys(data.rates).sort();

    ReactDOM.render(ratesHeaderElt({ base: baseCurrency, date: data.date }),
      document.getElementById('ratesHeader'));
    ReactDOM.render(currencyListElt({ base: baseCurrency, currencies, handleChange: (c) => {
        setDefaultCurrency(c);
        renderUI();
      }}), document.getElementById('currencyList'));
    ReactDOM.render(ratesElt({currencies, rates: data.rates}), document.getElementById('rates'));
  });

}

renderUI();
