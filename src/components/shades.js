import React from 'react';
const copy = require('clipboard-copy')

function Strip({ hexCode }) {
  const styles = {
    backgroundColor: `#${hexCode}`,
    width: '40px',
    height: '100px',
    display: 'inline-block'
  };
  const copyHex = () => {
    copy(hexCode);
  };
  return (
    <div style={ styles } onClick={ copyHex }></div>
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
