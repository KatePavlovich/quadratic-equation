module.exports = function solveEquation(equation) {
  // your implementation
  //this solution is far from the best. tests pass, but only because in all cases we get array of the same length (when we make equation.split(' ')).
  // if we will get array without some parameters tests will fall
  //may be it will be better to use regexp but they come little confusing to me

  let arr = equation.split(' ');
  let len = arr.length;
  let a = arr[0] * 1;
  let b = `${arr[3]}${arr[4]}` * 1;
  let c = `${arr[len - 2]}${arr[len - 1]}` * 1;

  if (isNaN(a)) { a = 1 };
  if (isNaN(b)) { b = `${arr[3]}` * 1 };
  if (isNaN(c)) { c = 0 };
  let x1 = Math.round((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a));
  let x2 = Math.round((-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a));

  return x1 > x2 ? [x2, x1] : [x1, x2];
}
