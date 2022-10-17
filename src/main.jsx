// Main Entry Point

import { createRoot } from 'react-dom/client';

import './styles.css';

import {getDefaultCurrency, setDefaultCurrency} from './util/default-currency.js';
import {getRates} from './util/rates-api.js';

const headerNode = document.getElementById('ratesHeader');
const currenciesNode = document.getElementById('currencyList');
const ratesNode = document.getElementById('rates');

import ratesHeaderElt from './components/rates-header.js';
import currencyListElt from './components/currency-list.js';
import ratesElt from './components/rates.js';

function renderUI() {

  const base = getDefaultCurrency();
  getRates(base).then(({rates, date}) => {

    const currencies = Object.keys(rates).sort();

    createRoot(headerNode).render(ratesHeaderElt({base, date}));
    createRoot(currenciesNode).render(currencyListElt({base, currencies, handleChange: (c) => {
        setDefaultCurrency(c);
        renderUI();
      }}));
    createRoot(ratesNode).render(ratesElt({rates}));
  });

}

renderUI();
