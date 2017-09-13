import React from 'react';
import { css } from 'emotion';
const copy = require('clipboard-copy');

export default function ({ hexCode }) {
  const bg = { backgroundColor: `#${hexCode}` };
  const styles = css`
    width: 40px;
    height: 100px;
    transition: all 100ms ease-in-out;
    &:hover {
      transform: translateY(-4px);
    }
  `;
  const copyHex = () => {
    copy(hexCode);
  };
  return (
    <div style={ bg } className={`${ styles } inline-block`} onClick={ copyHex }></div>
  );
}
