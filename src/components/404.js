import React from 'react';
import styled from 'emotion/react';

export default function() {
  const H1 = styled('h1')`
    font-size: 6rem;
  `;
  const H2 = styled('h2')`
    font-size: 4rem;
  `;
  const H3 = styled('h2')`
    font-size: 2rem;
  `;
  return (
    <div className="t-center pt-5">
      <H1>Um,</H1>
      <H2>there ain't no sunshine</H2>
      <H3>on this page..</H3>
    </div>
  );
}
