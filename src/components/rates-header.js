import React from 'react';

const ratesHeaderElt = ({base, date}) => {
  const dateFormatted = new Date(date).toLocaleDateString('de-DE', { month: '2-digit', day: '2-digit', year: 'numeric' });
  return React.createElement(
    'h2',
    { className: 'text-3xl pb-2 border-b border-gray-800'},
    'Aktuelle Kurse des ' + base,
    React.createElement('small', { className: 'ml-4' }, `(Stand vom ${dateFormatted})`)
  );
};

export default ratesHeaderElt;
