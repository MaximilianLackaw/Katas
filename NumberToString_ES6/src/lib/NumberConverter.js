"use strict";

let units = ['null', 'ein', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben',
  'acht', 'neun'];

let tens = ['', 'zehn', 'zwanzig', 'dreissig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'];

let elevenToNineteen = ['elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn',
  'siebzehn', 'achtzehn', 'neunzehn'];



class NumberConverter {

  convert(number) {
    let ans = '';

    if (number === 100) {
      return 'einhundert';
    }

    if (number % 10 === 0) {
      return tens[number / 10];
    }

    if (number >= 21) {
      ans += units[number % 10];
      ans += 'und';
      let index = Math.floor(number / 10);

      ans += tens[index];

      return ans;
    }

    if (number > 10 && number < 20) {
      return elevenToNineteen[number - 11];
    }

    ans += units[number];

    if (number === 1){
      ans += 's';
    }

    return ans;
  }
}

module.exports = NumberConverter;
