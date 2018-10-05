function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num-1);
}

function permutations(str, lastChar) {

}

function reversefunc(str) {
  if (str.length <= 1) {
    return str;
  }

  return reversefunc(str.substring(1)) + str[0];
}

function setup() {
  var tenFactorial = factorial(3);
  var reversed = reversefunc("hello");
  console.log(reversed);
}
