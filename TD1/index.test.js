const { calculateSum } = require("./index");
describe("Sum calculation function", () => {
  test("should return the sum of two numbers", () => {
    expect(calculateSum(2, 3) === 5).toBeTruthy();
  });
  test("Sum should return wrong result", () => {
    expect(calculateSum(2, 2) === 5).toBeFalsy();
  });
});