import { capitalize } from "./index.js"

console.log(capitalize);

test('Capitalizes first letter of a string.', () => {
  expect(capitalize("uppercase")).toBe("Uppercase");
});

test('Capitalizes first letter of a different string.', () => {
  expect(capitalize("ldjJJ49929 , . -0=")).toBe("LdjJJ49929 , . -0=");
});