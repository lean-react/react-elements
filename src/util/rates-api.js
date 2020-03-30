
const baseUrl = 'https://api.exchangeratesapi.io/latest';

export async function getCurrencies() {
  try {
    const response = await axios.get(baseUrl);
    const currencies = ['EUR', ...Object.keys(response.data.rates)];
    return currencies.sort();
  } catch (e) {
    console.log(e);
    throw Error('Problem fetching data from https://exchangeratesapi.io');
  }
}

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
    console.log(e);
    throw Error('Problem fetching data from https://exchangeratesapi.io');
  }
}


