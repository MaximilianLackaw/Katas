"use strict";

class NumberConverter {

  constructor() {
    this.units = ['null', 'ein', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben',
      'acht', 'neun'];

    this.tens = ['', 'zehn', 'zwanzig', 'dreissig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig'];

    this.elevenToNineteen = ['elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn',
      'siebzehn', 'achtzehn', 'neunzehn'];
  }

  convert(number) {
    if (number === 0) {
      return this.units[0];
    }

    let ans = '';
    if (number >= 1000) {
      ans += this.threeDigits(Math.floor(number / 1000));

      ans += 'tausend';
    }

    return ans + this.threeDigits(number % 1000, true);
  }

  threeDigits(number, last) {
    let ans = '';
    if (number >= 100) {
      ans += this.units[Math.floor(number / 100)];

      ans += 'hundert';
    }

    let numberRest = number % 100;

    if (numberRest > 10 && numberRest < 20) {
      ans += this.elevenToNineteen[numberRest - 11];
    } else {
      if (numberRest % 10 !== 0) {
        ans += this.units[numberRest % 10];

        if (numberRest > 10) {
          ans += 'und';
        }
      }

      if (numberRest >= 10) {
        let index = Math.floor(numberRest / 10);
        ans += this.tens[index];
      }
    }

    if (!!last && numberRest === 1){
      ans += 's';
    }

    return ans;
  }

}

module.exports = NumberConverter;
