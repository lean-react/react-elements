// Small storage wrapper

export function getDefaultCurrency() {
  return localStorage.currency || 'EUR';
}

export function setDefaultCurrency(currency) {
  localStorage.currency = currency;
}
