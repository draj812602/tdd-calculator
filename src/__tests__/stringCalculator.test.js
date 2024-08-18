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
    console.log("here");
    expect(add("1\n2,3")).toBe(6);
  });
  test("Supports custom separator", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  test("Negative numbers throw an exception", () => {
    expect(() => add("1\n2,-2,3,-4")).toThrow(
      "negative numbers not allowed: -2, -4"
    );
  });
  test("throws error for various invalid inputs", () => {
    expect(() => add("123,qqqqq,456")).toThrow("Invalid input");
    expect(() => add("1,dddd,2")).toThrow("Invalid input");
    expect(() => add("qwnshfdbd")).toThrow("Invalid input");
  });
});
