import React from 'react';

const ratesElt = ({currencies, rates}) => React.createElement( React.Fragment, null,
  currencies.map(c => React.createElement('tr', { key: c },
    React.createElement('td', null, c),
    React.createElement('td', { className: 'text-right' }, rates[c].toFixed(4) ),
  ))
);

export default ratesElt;
