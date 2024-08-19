export function add(numbers) {
  // Remove surrounding double quotes if present
  if (numbers.startsWith('"') && numbers.endsWith('"')) {
    numbers = numbers.slice(1, -1);
  }

  // Return 0 for an empty string
  if (numbers.trim() === "") return 0;

  // Default delimiter is comma and newline
  let delimiterPattern = /[,\n]/;
  let numString = numbers;

  // Handle custom delimiters
  const customDelimiterPattern = /^\/\/(.*?)\n/;
  const match = numbers.match(customDelimiterPattern);
  if (match) {
    const customDelimiter = match[1];
    delimiterPattern = new RegExp(
      `[${customDelimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")}\n]`,
      "g"
    );
    numString = numbers.replace(customDelimiterPattern, "");
  }

  // Remove unwanted characters like quotes and colons
  numString = numString.replace(/["':]/g, "");

  // Replace all delimiters (custom and newline) with commas
  numString = numString.replace(delimiterPattern, ",");

  // Split by commas and process numbers
  const numArray = numString.split(",").map((num) => {
    const parsed = parseInt(num, 10);
    return isNaN(parsed) ? 0 : parsed;
  });

  // Calculate and return the sum
  return numArray.reduce((acc, curr) => acc + curr, 0);
}
