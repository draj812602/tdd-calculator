export function add(numbers) {
  if (numbers === "") return 0;
  let seperators = /[,\n]/;
  if (numbers.startsWith("//")) {
    const seperatorsLineEnd = numbers.indexOf("\n");
    seperators = numbers[2];
    numbers = numbers.substring(seperatorsLineEnd + 1);
  }

  const regex = new RegExp(`[${seperators}]`, "g");
  // converting string to integer and then calculating the sum using reduce
  const numberArray = numbers.split(regex).map((num) => parseInt(num, 10));
  return numberArray.reduce((sum, num) => sum + num, 0);
}
