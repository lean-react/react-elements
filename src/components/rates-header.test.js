import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ratesHeaderElt from "./rates-header";

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

test("renders base currency and german formatted date", () => {
  const base = 'CHF';
  const date = '2020-03-31';
  act(() => {
    render(ratesHeaderElt({base, date}), container);
  });

  expect(container.textContent).toContain('CHF');
  if (process.platform === 'win32' && process.version < 'v13') {
    expect(container.textContent).toMatch(/2020-03-31/);
  } else {
    expect(container.textContent).toMatch(/31\.03\.2020/);
  }
});
