import React from 'react';
import Strip from './color-strip';
import {
expandHexCode,
hexToHsl,
hslToHex
} from '../utils/common';

export default function({ match: { params } }) {
  let hex = params.color.length < 6 ? expandHexCode(params.color) : params.color;
  let [h, s, l] = hexToHsl(hex);

  const offsets = [-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50];
  let shades = offsets.map((offset) => {
    return offset ? hslToHex(h, s, (l+offset)) : hex;
  });

  return (
    <div className="flex flex-center">
      { shades.map((shade) => <Strip hexCode={ shade } key={ shade }/> ) }
    </div>
  );
}
