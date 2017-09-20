function isValidHexCode(hexCode) {
  return /(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(hexCode)
}

function expandHexCode(hexCode) {
  return hexCode[0]+hexCode[0]+hexCode[1]+hexCode[1]+hexCode[2]+hexCode[2];
}

/**
 Color conversion formulas from https://github.com/mjackson/mjijackson.github.com/blob/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.txt
**/
function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function toHex(x) {
  let hex = Math.round(x * 255).toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function hslToHex(h, s, l) {
  let r, g, b;

  h /= 360;
  s /= 100;
  l /= 100;

  if (s === 0) {
    r = g = b =l;
  } else {
    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return `${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function hexToHsl(hexCode) {
  let r, g, b;
  r = parseInt(`${hexCode[0]}${hexCode[1]}`, 16)/255;
  g = parseInt(`${hexCode[2]}${hexCode[3]}`, 16)/255;
  b = parseInt(`${hexCode[4]}${hexCode[5]}`, 16)/255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);

  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch(max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        // no default
    }
    h /= 6;
  }

  h = Math.round(Math.abs(h * 360));
  s = Math.round(Math.abs(s * 100));
  l = Math.round(Math.abs(l * 100));

  return [h, s, l];
}

function getLightnessArray(l) {
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

module.exports = { isValidHexCode, expandHexCode, hexToHsl, hslToHex, getLightnessArray };
