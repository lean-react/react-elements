import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import currencyListElt from "./currency-list";

const base = 'EUR';
const currencies = [
  'CHF', 'CNY', 'EUR', 'GBP', 'RUB', 'USD'
];

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('renders a button for each currency', () => {
  const handleChange = () => {};

  act(() => {
    render(currencyListElt({base, currencies, handleChange}), container);
  });
  const buttons = container.querySelectorAll('button');
  expect(buttons.length).toBe(currencies.length);
  buttons.forEach((btn, ix) => {
    expect(btn.textContent).toBe(currencies[ix]);
  });
});

test('handles click on one of the buttons', () => {
  const handleChange = jest.fn();

  act(() => {
    render(currencyListElt({base, currencies, handleChange}), container);
  });
  const buttons = container.querySelectorAll('button');
  buttons.forEach(btn => { btn.dispatchEvent(new MouseEvent("click", { bubbles: true })); });

  expect(handleChange).toHaveBeenCalledTimes(currencies.length);
  currencies.forEach((cur, ix) => {
    expect(handleChange).toHaveBeenNthCalledWith(ix+1, cur);
  });
});
