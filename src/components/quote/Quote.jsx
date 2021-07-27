import React from 'react';

const Quote = ({ name, text }) => (
  <section>
    <h2>{name || 'unknown'}</h2>
    <p>{text}</p>
  </section>
);

export default Quote;
