import axiosMock from 'axios';
jest.mock('axios');

import {getRates} from './rates-api';

const eurQuery = {
  data: {
    base: 'EUR',
    date: '29.03.2020',
    rates: {
      CHF: 1.0571,
      CNY: 7.8337,
      GBP: 0.8890,
      RUB: 88.1385,
      USD: 1.1034
    }
  }
};

const usdQuery = {
  data: {
    base: 'USD',
    date: '02.04.2020',
    rates: {
      CHF: 0.9674491106,
      CNY: 7.0958188153,
      EUR: 0.9169264625,
      GBP: 0.8044929397,
      RUB: 78.709426004,
      USD: 1
    }
  }
};

// Hack to provide axios until we can import it
axiosMock.get
  .mockResolvedValueOnce(eurQuery)
  .mockResolvedValueOnce(usdQuery);

it('getRates returns all exchange rates including EUR', () => {
  getRates('EUR').then(data => {
    expect(Object.keys(data.rates).length).toBe(6);
  });
  getRates('USD').then(data => {
    expect(Object.keys(data.rates).length).toBe(6);
  });
});
