function reverseNumber(num) {
  let reversed = 0;
  let isNegative = false;

  if (num < 0) {
    isNegative = true;
    num = -num;
  }

  while (num > 0) {
    let digit = num % 10;        // Get last digit
    reversed = reversed * 10 + digit;  // Append digit
    num = Math.floor(num / 10);  // Remove last digit
  }

  return isNegative ? -reversed : reversed;
}

// Example usage
let input = -12345;
let output = reverseNumber(input);
console.log("Reversed number:", output);
