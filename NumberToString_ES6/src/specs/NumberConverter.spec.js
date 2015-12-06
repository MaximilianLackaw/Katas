'use strict';

var NumberConverter = require('../lib/NumberConverter.js');

describe('NumberConverter', () => {

  var converter;

  beforeEach(() => {
    converter = new NumberConverter();
  });

  it('Should return null', () => {
    expect(converter.convert(0)).toBe('null');
  });

  it('Should return eins', () => {
    expect(converter.convert(1)).toBe('eins');
  });

  it('Should return zwei', () => {
    expect(converter.convert(2)).toBe('zwei');
  });

  it('Should return drei', () => {
    expect(converter.convert(3)).toBe('drei');
  });

  it('Should return vier', () => {
    expect(converter.convert(4)).toBe('vier');
  });

  it('Should return neun', () => {
    expect(converter.convert(9)).toBe('neun');
  });

  it('Should return zehn', () => {
    expect(converter.convert(10)).toBe('zehn');
  });

  it('Should return elf', () => {
    expect(converter.convert(11)).toBe('elf');
  });

  it('Should return zwölf', () => {
    expect(converter.convert(12)).toBe('zwölf');
  });

  it('Should return dreizehn', () => {
    expect(converter.convert(13)).toBe('dreizehn');
  });

  it('Should return siebzehn', () => {
    expect(converter.convert(17)).toBe('siebzehn');
  });

  it('Should return achtzehn', () => {
    expect(converter.convert(18)).toBe('achtzehn');
  });

  it('Should return zwanzig', () => {
    expect(converter.convert(20)).toBe('zwanzig');
  });

  it('Should return einundzwanzig', () => {
    expect(converter.convert(21)).toBe('einundzwanzig');
  });

  it('Should return dreissig', () => {
    expect(converter.convert(30)).toBe('dreissig');
  });

  it('Should return dreiunddreissig', () => {
    expect(converter.convert(33)).toBe('dreiunddreissig');
  });

  it('Should return neunundneunzig', () => {
    expect(converter.convert(99)).toBe('neunundneunzig');
  });

  it('Should return einhundert', () => {
    expect(converter.convert(100)).toBe('einhundert');
  });

  it('Should return einhundertzwei', () => {
    expect(converter.convert(102)).toBe('einhundertzwei');
  });

  it('Should return einhundertzehn', () => {
    expect(converter.convert(110)).toBe('einhundertzehn');
  });

  it('Should return einhundertelf', () => {
    expect(converter.convert(111)).toBe('einhundertelf');
  });

  it('Should return einhundertneunundneunzig', () => {
    expect(converter.convert(199)).toBe('einhundertneunundneunzig');
  });

  it('Should return zweihundert', () => {
    expect(converter.convert(200)).toBe('zweihundert');
  });

  it('Should return neunhundertneunundneunzig', () => {
    expect(converter.convert(999)).toBe('neunhundertneunundneunzig');
  });

  it('Should return eintausend', () => {
    expect(converter.convert(1000)).toBe('eintausend');
  });

  it('Should return eintausendeins', () => {
    expect(converter.convert(1001)).toBe('eintausendeins');
  });

  it('Should return eintausendvierhundertdreiundzwanzig', () => {
    expect(converter.convert(1423)).toBe('eintausendvierhundertdreiundzwanzig');
  });

  it('Should return zweitausenddreihundert', () => {
    expect(converter.convert(2300)).toBe('zweitausenddreihundert');
  });

  it('Should return neuntausendvierhundertneunzehn', () => {
    expect(converter.convert(9419)).toBe('neuntausendvierhundertneunzehn');
  });

  it('Should return zehntausenddreihundert', () => {
    expect(converter.convert(10300)).toBe('zehntausenddreihundert');
  });

  it('Should return neunhundertdreiundneunzigtausendvierhundertdreizehn', () => {
    expect(converter.convert(993413)).toBe('neunhundertdreiundneunzigtausendvierhundertdreizehn');
  });
});
