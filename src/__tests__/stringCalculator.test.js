import { add } from "../stringCalculator";

describe("String Calculator Tests", () => {
  test("Empty string returns 0", () => {
    expect(add("")).toBe(0);
  });

  test("Single number returns that number", () => {
    expect(add("1")).toBe(1);
  });
  test("Two numbers, comma-separated", () => {
    expect(add("1,2")).toBe(3);
  });
  test("Handles new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });
});
