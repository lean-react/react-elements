import { render, screen } from '@testing-library/react';

import ratesElt from './rates';

test('displays a row for each currency', () =>{

  const rates = {
    CHF: 0.9674491106,
    CNY: 7.0958188153,
    EUR: 0.9169264625,
    GBP: 0.8044929397,
    RUB: 78.709426004,
    USD: 1
  };

  const table = document.createElement('tbody');

  render(ratesElt({rates}), {
    container: document.body.appendChild(table)
  });

  expect(screen.getAllByRole('row').length).toBe(6);
});
