import {getDefaultCurrency, setDefaultCurrency} from './default-currency';

beforeEach(() => {
  localStorage.clear();
});

it('getDefaultCurrency returns initially "EUR"', () => {
  const currency = getDefaultCurrency();
  expect(currency).toBe('EUR');
});

it('setDefaultCurrency stores currency', () => {
  const expected = 'CHF';
  setDefaultCurrency(expected);
  const currency = getDefaultCurrency();
  expect(currency).toBe(expected);
});
