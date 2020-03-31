import React from 'react';

const currencyListElt = ({base, currencies, handleChange}) => React.createElement(
  'ul',
  { className: 'w-24 text-blue-700 text-center mx-auto border-b border-blue-200'},
  currencies.map(c => {
    let classNames = 'w-24 py-2 border border-blue-200 border-b-0';
    if (c === base) {
      classNames += ' bg-blue-500 text-white';
    } else {
      classNames += ' bg-white hover:bg-gray-100';
    }
    return React.createElement('li', { key: c },
      React.createElement('button', {
        className: classNames,
        onClick: () => handleChange(c)
      }, c));
  })
);

export default currencyListElt;
