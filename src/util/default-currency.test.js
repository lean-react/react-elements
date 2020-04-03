import {getDefaultCurrency, setDefaultCurrency} from './default-currency';

beforeEach(() => {
  localStorage.clear();
});

test('getDefaultCurrency returns initially "EUR"', () => {
  const currency = getDefaultCurrency();
  expect(currency).toBe('EUR');
});

test('setDefaultCurrency stores currency', () => {
  const expected = 'CHF';
  setDefaultCurrency(expected);
  const currency = getDefaultCurrency();
  expect(currency).toBe(expected);
});
