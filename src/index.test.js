import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./index.js"

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

  test('Adds negatives', () => {
    expect(calculator.add(-50, 25)).toBe(-25);
  });

  test('Adds floating points', () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test('Subtracts two numbers', () => {
    expect(calculator.subtract(1, 1)).toBe(0);
  });

  test('Subtracts negatives', () => {
    expect(calculator.subtract(100, -50)).toBe(150);
  });

  test('Subtracts floating points', () => {
    expect(calculator.subtract(0.4, 0.1)).toBeCloseTo(0.3);
  });

  test('Divides two numbers', () => {
    expect(calculator.divide(1, 1)).toBeCloseTo(1);
  });

  test('Divides into fractions', () => {
    expect(calculator.divide(50, 3)).toBeCloseTo(16.66666666666);
  });

  test('Divides negatives', () => {
    expect(calculator.divide(50, -1)).toBeCloseTo(-50);
  });

  test('Divides floating points', () => {
    expect(calculator.divide(0.15, 0.5)).toBeCloseTo(0.3);
  });

  test('Multiplies two numbers', () => {
    expect(calculator.multiply(1, 1)).toBe(1);
  });

  test('Multiplies negatives', () => {
    expect(calculator.multiply(10, -8)).toBe(-80);
  });

  test('Multiplies floating points', () => {
    expect(calculator.multiply(0.6, 0.5)).toBeCloseTo(0.3);
  });
});

describe('caesarCipher', () => {
  test('Changes the position of characters on a string with the caesar cipher.', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });

  test('Uses caeser cipher on a different string.', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
});

describe('analyzeArray', () => {
  test('Capitalizes first letter of a string.', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });
});