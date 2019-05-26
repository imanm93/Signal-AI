const assert = require('chai').assert;
const numberToWords = require('../index');

describe('Tool', function(){

  it('Tool should return string', function() {
    assert.typeOf(numberToWords(1), 'string');
  });

  it('Tool should return type error', function() {
    assert.equal(numberToWords("1"), 'Please input a number type');
  });

  it('Tool should return number out of bounds error - more than 1000', function() {
    assert.equal(numberToWords(2000), 'Number out of bounds, please use numbers from 1 - 1000 only');
  });

  it('Tool should return number out of bounds error - less than 1', function() {
    assert.equal(numberToWords(0), 'Number out of bounds, please use numbers from 1 - 1000 only');
  });

  it('Tool should return integer in English words - One', function() {
      assert.equal(numberToWords(1), 'One');
  });

  it('Tool should return integer in English words - One Thousand', function() {
    assert.equal(numberToWords(1000), 'One Thousand');
  });

  it('Tool should return integer in English words - Twelve', function() {
      assert.equal(numberToWords(12), 'Twelve');
  });

  it('Tool should return integer in English words - Fifty', function() {
    assert.equal(numberToWords(50), 'Fifty');
  });

  it('Tool should return integer in English words - One Hundred', function() {
    assert.equal(numberToWords(100), 'One Hundred');
  });

  it('Tool should return integer in English words - One Hundred and One', function() {
    assert.equal(numberToWords(101), 'One Hundred and One');
  });

  it('Tool should return integer in English words - One Hundred and Twelve', function() {
      assert.equal(numberToWords(112), 'One Hundred and Twelve');
  });

  it('Tool should return integer in English words - One Hundred and Twenty-One', function() {
      assert.equal(numberToWords(121), 'One Hundred and Twenty-One');
  });

  it('Tool should return integer in English words - Seven Hundred and Twenty-One', function() {
      assert.equal(numberToWords(721), 'Seven Hundred and Twenty-One');
  });

});
