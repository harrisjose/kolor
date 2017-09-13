import React from 'react';
import styled from 'emotion/react';

export default function() {
  const H1 = styled('h1')`
    font-size: 10rem;
  `;
  return (
    <div className="flex flex-center">
      <H1>404</H1>
    </div>
  );
}
