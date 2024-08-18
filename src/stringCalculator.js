export function add(numbers) {
  if (numbers === "") return 0;
  const delimiters = [",", "\n"];
  const regex = new RegExp(`[${delimiters.join("")}]`, "g");
  // converting string to integer and then calculating the sum using reduce
  const numberArray = numbers.split(regex).map((num) => parseInt(num, 10));
  return numberArray.reduce((sum, num) => sum + num, 0);
}
