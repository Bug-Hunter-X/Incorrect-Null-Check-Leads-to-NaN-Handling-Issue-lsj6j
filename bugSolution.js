function foo(x) {
  if (x === null || isNaN(x)) {
    return 0; // Correctly handles both null and NaN
  }
  return x + 1;
}
console.log(foo(null)); // Output: 0
console.log(foo(NaN)); // Output: 0
console.log(foo(5)); // Output: 6