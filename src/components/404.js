import React from 'react';
import styled from 'emotion/react';

export default function() {
  const Container = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;
  const H1 = styled('h1')`
    font-size: 10rem;
  `;
  return (
    <Container>
      <H1>404</H1>
    </Container>
  );
}
