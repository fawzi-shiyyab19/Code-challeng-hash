const { firstWordRepet } = require('./challenge02');

describe('HashTable Challenge-02', () => {
  test('firstWordRepet function test-01', () => {
    let str = 'ASAC is a department at LTUC. ASAC teaches programming in LTUC.';
    let word = firstWordRepet(str);
    expect(word).toEqual('ASAC');
  });
  test('firstWordRepet function test-02', () => {
    let str = 'is a department at LTUC. ASAC teaches programming in LTUC.';
    let word = firstWordRepet(str);
    expect(word).toEqual('LTUC.');
  });
  test('firstWordRepet function test-03', () => {
    let str = 'is a department at LTUC. ASAC teaches programming in .';
    let word = firstWordRepet(str);
    expect(word).toEqual('No Repetition');
  });

});