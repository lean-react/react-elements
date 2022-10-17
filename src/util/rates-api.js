import axios from 'axios';

const baseUrl = 'https://api.exchangerate.host/latest';

export async function getRates(baseCurrency) {
  try {
    const response = await axios.get(baseUrl + '?base=' + baseCurrency);
    const { date, rates } = response.data;
    // Add EUR if base currency
    if (baseCurrency === 'EUR') {
      rates['EUR'] = 1;
    }
    return { date, rates };
  } catch (e) {
    throw Error('Problem fetching data from https://exchangerate.host');
  }
}


