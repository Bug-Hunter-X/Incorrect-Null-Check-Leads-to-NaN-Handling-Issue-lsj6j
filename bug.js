function foo(x){
  if (x == null) {
    return 0; // This will always return 0 even if x is NaN
  }
  return x + 1;
}
console.log(foo(null)); // Output: 0
console.log(foo(NaN)); // Output: NaN