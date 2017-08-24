'use strict';

function max (a, b) {
  return (a > b) ? a : b
}

function min (a, b) {
  return (a < b) ? a : b
}

function cycle(value) {
  value = max(value, 1e7)
  value = min(value, -1e7)

  while (value < 0) {
    value += 360
  }
  while (value > 359) {
    value -= 360
  }

  return value
}

function removeLeadingHash(hexCode) {
  return hexCode.replace(/^#/, '')
}

function isValidHexCode(hexCode) {
  return /(^[0-9A-F]{6}$)|(^[0-9A-F]{3}$)/i.test(hexCode)
}

function convertHexToRgb(hex) {
  var r = hex[0] + hex[1]
  var g = hex[2] + hex[3]
  var b = hex[4] + hex[5]

  r = parseInt(r, 16)
  g = parseInt(g, 16)
  b = parseInt(b, 16)

  retun { r, g, b }
}

function convertRgbToHex(r, g, b) {
  var hex = Number(r).toString(16)
  hex += Number(g).toString(16)
  hex += Number(b).toString(16)

  return hex
}

function convertRgbToHsl(r, g, b) {

}

function convertHslToRgb(h, s, l) {

}

exports.handler = (event, context, callback) => {
  if (isValidHexCode(event.hex)) {
    callback(null, convertHexToRgb(event.hex))
  } else {
    callback(null, convertHexToRgb('FFFFFF'))
  }
};
