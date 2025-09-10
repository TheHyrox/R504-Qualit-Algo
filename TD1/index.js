const calculateSum = (a, b) => {
  return a + b;
};

function worldFunction(flag) {
  if (flag) {
    return "Hello, World!";
  } else {
    return "goodbye, World!";
  }
}

console.log(worldFunction(calculateSum(2, 3)));
console.log(worldFunction(worldFunction()));

export { calculateSum, worldFunction };
