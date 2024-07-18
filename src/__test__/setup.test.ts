type StringOrNumber = string | number;
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: StringOrNumber, b: StringOrNumber): StringOrNumber {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}
import { describe, expect, it } from "vitest";

describe("add function", () => {
  it("should add two numbers correctly", () => {
    expect(add(1, 2)).toBe(3);
  });

  it("should concatenate two strings correctly", () => {
    expect(add("Hello", "World")).toBe("HelloWorld");
  });

  it("should concatenate a number and a string correctly", () => {
    expect(add(1, "World")).toBe("1World");
  });

  it("should concatenate a string and a number correctly", () => {
    expect(add("Hello", 2)).toBe("Hello2");
  });
});
