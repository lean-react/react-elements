import {getCurrencies, getRates} from './rates-api';

// Hack to provide axios until we can import it
global.axios = { get: (url) => Promise.resolve({ data: {
  base: 'EUR',
  date: '29.03.2020',
  rates: {
    CHF: 1.0571,
    CNY: 7.8337,
    GBP: 0.8890,
    RUB: 88.1385,
    USD: 1.1034
  }
} }) };

it('getRates returns all exchange rates including EUR', () => {
  getRates('EUR').then( data => {
    expect(Object.keys(data.rates).length).toBe(6);
  });
});
