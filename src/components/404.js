import React from 'react';
import styled from 'emotion/react';

export default function() {
  const H1 = styled('h1')`
    font-size: 10rem;
  `;
  const H2 = styled('h2')`
    font-size: 0.8rem;
  `;
  return (
    <div className="t-center pt-5">
      <H1>404</H1>
      <H2>uh, how'd you even get here ?</H2>
    </div>
  );
}
