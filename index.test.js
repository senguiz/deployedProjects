const axios = require('axios');
const deployedProjects = require('./index.js');

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}

let result = deployedProjects();

test('Fonksiyonun dönüş değeri nesne mi?', () => {
  const strLength =
    result.s10g2.length + result.s10g3.length + result.s9g5.length;
  expect(strLength).not.toBe(0);
  expect(typeof result).toBe('object');
  expect(Array.isArray(result)).not.toBe(true); //Nesne olmalı, Array değil
});

test('s10g2 projesi yayına alınmış.', () => {
  expect(isValidUrl(result.s10g2)).toBe(true);
});

test('s10g3 projesi yayına alınmış.', () => {
  expect(isValidUrl(result.s10g3)).toBe(true);
});

test('s9d5 projesi yayına alınmış.', () => {
  expect(isValidUrl(result.s9d5)).toBe(true);
});
