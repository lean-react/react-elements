// Main Entry Point

import {getDefaultCurrency} from './util/default-currency.js';

const baseCurrency = getDefaultCurrency();

const ratesHeader = React.createElement(
  'h2',
  { className: 'text-3xl pb-2 border-b border-gray-800'},
  'Aktuelle Kurse des ' + baseCurrency
);

ReactDOM.render(ratesHeader, document.getElementById('ratesHeader'));
