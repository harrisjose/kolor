import React from 'react';

function Strip({ hexCode }) {
  const styles = {
    backgroundColor: `#${hexCode}`,
    width: '40px',
    height: '100px',
    display: 'inline-block'
  };
  return (
    <div style={ styles }></div>
  );
}

export default function({ match: { params } }) {
  return (
    <div>
      <p>The current color is #{ params.color }</p>
      <Strip hexCode={ params.color }/>
    </div>
  );
}
