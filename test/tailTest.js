const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail",() => {
  it("return '2' for [5, 6,7]", () =>{
    assert.strictEqual(tail([5, 6, 7]).length, 2);
  });
  it("return '2' for ['Hello', 'Lighthouse', 'Labs']", () =>{
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  it("return '0' for []", () =>{
    assert.strictEqual(tail([]).length, 0);
  });
});