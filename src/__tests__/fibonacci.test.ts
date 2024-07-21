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
function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

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
describe("fibonacci function", () => {
  it("should return 0 for n = 0", () => {
    expect(fibonacci(0)).toBe(0);
  });

  it("should return 1 for n = 1", () => {
    expect(fibonacci(1)).toBe(1);
  });

  it("should return 1 for n = 2", () => {
    expect(fibonacci(2)).toBe(1);
  });

  it("should return 2 for n = 3", () => {
    expect(fibonacci(3)).toBe(2);
  });

  it("should return 3 for n = 4", () => {
    expect(fibonacci(4)).toBe(3);
  });

  it("should return 5 for n = 5", () => {
    expect(fibonacci(5)).toBe(5);
  });

  it("should return 8 for n = 6", () => {
    expect(fibonacci(6)).toBe(8);
  });

  it("should return 13 for n = 7", () => {
    expect(fibonacci(7)).toBe(13);
  });
});
