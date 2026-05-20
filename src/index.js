import "./styles.css";

export function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

export function reverseString(string) {
  return [...string].reverse().join("");
}

export const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  divide: (a, b) => {
    return a / b;
  },
  multiply: (a, b) => {
    return a * b;
  }
};

export function caesarCipher(string, shiftFactor) {
  shiftFactor %= 26;
  if (shiftFactor < 1) {
    shiftFactor += 26;
  }

  utfArray = [...string].map((char) => {
    utf = char.charCodeAt(0);
    
    if (utf >= 65 && utf <= 90) {
      utf += shiftFactor;
      if (utf > 90) {
        utf -= 26;
      }
    } else if (utf >= 97 && utf <= 122) {
      utf += shiftFactor;
      if (utf > 122) {
        utf -= 26;
      }
    }

    return utf;
  });

  return String.fromCharCode(...utfArray);
};

export function analyzeArray(array) {
  const object = {};
  let min = max = array[0];
  let sum = 0;
  object.length = array.length;
  array.map((number) => {
    sum += number;
    if (number < min) {
      min = number;
    }
    if (number > max) {
      max = number;
    }
    console.log(sum);
  });
  object.min = min;
  object.max = max;
  object.average = sum / object.length;
  return object;
};