import { capitalize } from "./index.js"

console.log(capitalize);

test('Capitalizes first letter of a string', () => {
  expect(capitalize("uppercase")).toBe("Uppercase");
});