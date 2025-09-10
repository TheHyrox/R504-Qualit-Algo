import * as main from "./index.js";

describe("Sum calculation function", () => {
  test("Sum should return correct result", () => {
    expect(main.calculateSum(2, 3) === 5).toBeTruthy();
  });
  test("Sum should return wrong result", () => {
    expect(main.calculateSum(2, 2) === 5).toBeFalsy();
  });
});

describe("World function", () => {
  test("World function with true flag", () => {
    expect(main.worldFunction(true)).toBe("Hello, World!");
  });
  test("World function with false flag", () => {
    expect(main.worldFunction(false)).toBe("goodbye, World!");
  });
  test("World function with no flag", () => {
    expect(main.worldFunction()).toBe("goodbye, World!");
  });
});
