import test from 'ava';
import {
  isValidHexCode,
  expandHexCode,
  hexToHsl,
  hslToHex
} from '../src/utils/common';

test('Validate Hex Code', t => {
  t.truthy(isValidHexCode('cdcdcd'));
  t.falsy(isValidHexCode('cdxy11'));
});

test('Expand Hex Code', t => {
  t.is(expandHexCode('ccc'), 'cccccc');
  t.is(expandHexCode('f1f'), 'ff11ff');
});

test('Convert Hex to Hsl', t => {
  t.deepEqual(hexToHsl('2BB670'), [150, 62, 44]);
  t.deepEqual(hexToHsl('AA4B9F'), [307, 39, 48]);
});

test('Convert Hsl to Hex', t => {
  t.is(hslToHex(150, 62, 44).toUpperCase(), '2BB670');
  t.is(hslToHex(307, 39, 48).toUpperCase(), 'AA4B9F');
});
