import chai from './chai.js';
const assert = chai.assert;

const runTest = (functionName) => {
  describe("pow", () => {

    it("возводит число в степень n", () => {
      assert.equal(functionName(2, 3), 8);
    });

  });
};

export { runTest };
