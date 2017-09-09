import React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';

export default function() {
  const containerFluid = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;
  const H1 = styled('h1')`
    font-size: 3rem;
  `;
  return (
    <div className={ containerFluid }>
      <H1>404</H1>
    </div>
  );
}
