export function add(numbers) {
  if (numbers === "") return 0;
  let delimiters = [",", "\n"];
  if (numbers.startsWith("//")) {
    const delimiterLineEnd = numbers.indexOf("\n");
    const customDelimiter = numbers.substring(2, delimiterLineEnd);
    delimiters.push(customDelimiter);
    numbers = numbers.substring(delimiterLineEnd + 1);
  }

  const numberArray = numbers
    .split(new RegExp(`[${delimiters.join("")}]`))
    .map((num) => parseInt(num, 10));

  // A Check for negative numbers
  const negativeNumbers = numberArray.filter((num) => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }

  return numberArray.reduce((sum, num) => sum + num, 0);
}
