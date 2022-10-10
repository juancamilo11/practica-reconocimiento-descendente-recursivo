const getCFinal = (characters) => {
  return characters
    .trim()
    .replaceAll(" ", "")
    .replaceAll("-", "+")
    .replaceAll("/", "*")
    .split(/[0-9]/)
    .join("I");
};

console.log(getCFinal("3+5-(2/4)+1"));
