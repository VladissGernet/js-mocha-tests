import chai from './chai.js';
const assert = chai.assert;

const runTest = (functionName) => {

  describe('Testing nextHigher', () => {
    const doTest = (n, expected) => {
      const actual = functionName(n);
      assert.equal(actual, expected, `for nextHigher(${n})`);
    };

    it('Basic tests', () => {
      doTest(128, 256);
      doTest(1, 2);
      doTest(1022, 1279);
      doTest(127, 191);
      doTest(1253343, 1253359);
    });
  });
};

export { runTest };
