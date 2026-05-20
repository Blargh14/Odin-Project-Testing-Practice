import { capitalize, reverseString } from "./index.js"

test('Capitalizes first letter of a string.', () => {
  expect(capitalize("uppercase")).toBe("Uppercase");
});

test('Capitalizes first letter of a different string.', () => {
  expect(capitalize("ldjJJ49929 , . -0=")).toBe("LdjJJ49929 , . -0=");
});

test('Reverses a string', () => {
  expect(reverseString("anything")).toBe("gnihtyna");
});

test('Reverses a diffrent string', () => {
  expect(reverseString("Hello")).toBe("olleH");
});