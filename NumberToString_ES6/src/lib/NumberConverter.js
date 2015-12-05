"use strict";

let units = ['null', 'ein', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben',
  'acht', 'neun'];

let tens = ['', 'zehn', 'zwanzig', 'dreissig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'];

let elevenToNineteen = ['elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn',
  'siebzehn', 'achtzehn', 'neunzehn'];



class NumberConverter {

  convert(number) {
    if (number === 0) {
      return units[0];
    }

    let ans = '';
    if (number >= 100) {
      ans += 'einhundert';

      number -= 100;
    }

    if (number > 10 && number < 20) {
      ans += elevenToNineteen[number - 11];
    } else {
      if (number % 10 !== 0) {
        ans += units[number % 10];

        if (number > 10) {
          ans += 'und';
        }
      }

      if (number >= 10) {
        let index = Math.floor(number / 10);
        ans += tens[index];
      }
    }

    if (number === 1){
      ans += 's';
    }

    return ans;
  }
}

module.exports = NumberConverter;
