// Main Entry Point

import {getDefaultCurrency, setDefaultCurrency} from './util/default-currency.js';
import {getRates} from './util/rates-api.js';

function renderUI() {

  const baseCurrency = getDefaultCurrency();
  getRates(baseCurrency).then( data => {

    const date = new Date(data.date).toLocaleDateString('de-DE');
    const ratesHeader = React.createElement(
      'h2',
      { className: 'text-3xl pb-2 border-b border-gray-800'},
      'Aktuelle Kurse des ' + baseCurrency,
      React.createElement('small', { className: 'ml-4' }, `(Stand vom ${date})`)
    );

    const currencies = Object.keys(data.rates).sort();
    const currencyList = React.createElement(
      'ul',
      { className: 'w-24 text-blue-700 text-center mx-auto border-b border-blue-200'},
      currencies.map(c => {
        let classNames = 'w-24 py-2 border border-blue-200 border-b-0';
        if (c === baseCurrency) {
          classNames += ' bg-blue-500 text-white';
        } else {
          classNames += ' bg-white hover:bg-gray-100';
        }
        return React.createElement('li', { key: c },
          React.createElement('button', {
            className: classNames,
            onClick: () => {
              setDefaultCurrency(c);
              renderUI();
            }
          }, c));
      })
    );

    const rates = React.createElement( React.Fragment, null,
      currencies.map(c => React.createElement('tr', { key: c },
        React.createElement('td', null, c),
        React.createElement('td', { className: 'text-right' }, data.rates[c].toFixed(4) ),
      ))
    );

    ReactDOM.render(ratesHeader, document.getElementById('ratesHeader'));
    ReactDOM.render(currencyList, document.getElementById('currencyList'));
    ReactDOM.render(rates, document.getElementById('rates'));
  });

}

renderUI();
