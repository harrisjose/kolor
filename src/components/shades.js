import React from 'react';
import { css } from 'emotion';
import Strip from './color-strip';
import { expandHexCode, hexToHsl, hslToHex } from '../utils/common';

const getLightnessArray = (l) => {
  const offset = 10;
  let lightnessArray = [];

  let i = Number(l);
  while (i > 0) {
    lightnessArray.push(i);
    i -= offset;
  }

  i = Number(l) + offset;
  while (i < 100) {
    lightnessArray.push(i);
    i += offset;
  }
  return lightnessArray.sort((a,b) => a-b);
}

const wrapper = css`
  margin: 10px;
`;

const Shade = ({ color, isCurrent }) => {
  return (
    <div className={ wrapper }>
      <Strip hexCode={ color } isCurrent={ isCurrent } />
      <div className="flex flex-right m-0">
        <p className="t-small t-mb">#{ color }</p>
      </div>
    </div>
  )
}

export default function({ match: { params } }) {
  const hex = params.color.length < 6 ? expandHexCode(params.color) : params.color;

  const [h, s, l] = hexToHsl(hex);

  const lum = getLightnessArray(l);

  let shades = lum.map((lightness) => {
    return lightness === l ? hex : hslToHex(h, s, lightness);
  });

  return (
    <div className="container-centered flex flex-center pt-5 flex-wrap">
      { shades.map((shade) =>  <Shade color={ shade } key={ shade } isCurrent={ shade === hex } /> ) }
    </div>
  );
}
