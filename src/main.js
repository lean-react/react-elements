// Main Entry Point

import {getDefaultCurrency, setDefaultCurrency} from './util/default-currency.js';
import {getRates} from './util/rates-api.js';

import ratesHeaderElt from './components/rates-header.js';
import currencyListElt from './components/currency-list.js';
import ratesElt from './components/rates.js';

function renderUI() {

  const base = getDefaultCurrency();
  getRates(base).then(({rates, date}) => {

    const currencies = Object.keys(rates).sort();

    ReactDOM.render(ratesHeaderElt({base, date}),
      document.getElementById('ratesHeader'));
    ReactDOM.render(currencyListElt({base, currencies, handleChange: (c) => {
        setDefaultCurrency(c);
        renderUI();
      }}), document.getElementById('currencyList'));
    ReactDOM.render(ratesElt({currencies, rates}), document.getElementById('rates'));
  });

}

renderUI();
