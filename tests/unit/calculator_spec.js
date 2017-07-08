var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('has a sample test', function(){
    assert.equal(true, true)
  });

  it('calc starts at zero', function(){
    assert.strictEqual(0, calculator.runningTotal)
  })

  it('can add 4', function(){
    calculator.add(4)
    assert.strictEqual(4, calculator.runningTotal)
  });

  it('can add two numbers', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.strictEqual(5, calculator.runningTotal)
  });

  it('can subtract 3 from 7', function(){
    calculator.previousTotal = 7;
    calculator.subtract(3);
    assert.strictEqual(4, calculator.runningTotal)
  });

  it('can multiply 3 by 5', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(15, calculator.runningTotal)
  });

  it('can divide 21 by 7', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(3, calculator.runningTotal)
  });

  it('can concatenate number clicks', function(){
    calculator.numberClick(5);
    calculator.numberClick(5);
    assert.strictEqual(55, calculator.runningTotal)
  });

  it('can chain multiple operations', function(){
    calculator.numberClick(9)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.strictEqual(14, calculator.runningTotal)
  });

  it('can chain three operations', function(){
    calculator.numberClick(7)
    calculator.operatorClick('*')
    calculator.numberClick(3)
    calculator.operatorClick('+')
    calculator.numberClick(5)
    calculator.operatorClick('-')
    calculator.numberClick(7)
    calculator.operatorClick('=')
    assert.strictEqual(19, calculator.runningTotal)
  });

  it('can chain all operations', function(){
    calculator.numberClick(6)
    calculator.operatorClick('*')
    calculator.numberClick(6)
    calculator.operatorClick('+')
    calculator.numberClick(4)
    calculator.operatorClick('-')
    calculator.numberClick(5)
    calculator.operatorClick('/')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.strictEqual(7, calculator.runningTotal)
  });

  it('can clear running total without afecting calculation', function(){
    calculator.numberClick(9)
    calculator.operatorClick('/')
    calculator.numberClick(6)
    calculator.clearClick()
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.strictEqual(3, calculator.runningTotal)
  });

  it('can clear running total without afecting calculation double-check', function(){
    calculator.numberClick(7)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('+')
    calculator.numberClick(8)
    calculator.clearClick()
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.strictEqual(40, calculator.runningTotal)
  });



});
