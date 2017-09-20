import React from 'react';
import { css } from 'emotion';
const copy = require('clipboard-copy');

export default function ({ hexCode, isCurrent }) {
  const bg = { backgroundColor: `#${hexCode}` };
  const strip = css`
    width: 170px;
    height: 62px;
    transition: all 200ms ease-in-out;
    &:hover {
      transform: scale(1.02);
    }
  `;
  const active = css`
    box-shadow: 0px 0px 20px 0px #${hexCode};
    transform: scale(0.95);
  `;
  const copyHex = () => {
    copy(`#${hexCode}`);
  };
  return (
    <div style={ bg } className={`${ strip } ${ isCurrent ? active : '' } inline-block`} onClick={ copyHex }></div>
  );
}
