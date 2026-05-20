import { capitalize, reverseString, calculator } from "./index.js"

describe('capitalize', () => {
  test('Capitalizes first letter of a string.', () => {
    expect(capitalize("uppercase")).toBe("Uppercase");
  });

  test('Capitalizes first letter of a different string.', () => {
    expect(capitalize("ldjJJ49929 , . -0=")).toBe("LdjJJ49929 , . -0=");
  });
});

describe('reverseString', () => {
  test('Reverses a string', () => {
    expect(reverseString("anything")).toBe("gnihtyna");
  });

  test('Reverses a diffrent string', () => {
    expect(reverseString("Hello")).toBe("olleH");
  });
});

describe('calculator', () => {
  test('Adds two numbers', () => {
    expect(calculator.add(1, 1)).toBe(2);
  });

  test('Subtracts two numbers', () => {
    expect(calculator.subtract(1, 1)).toBe(0);
  });

  test('Divides two numbers', () => {
    expect(calculator.divide(1, 1)).toBeCloseTo(1);
  });

  test('Multiplies two numbers', () => {
    expect(calculator.multiply(1, 1)).toBe(1);
  });
});