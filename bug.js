function foo(x) {
  if (x === null) {
    return 0; // Handle null case
  } else if (typeof x !== 'number') {
    return NaN; // Handle non-number case
  } else {
    return x * 2; // Normal case
  }
}

console.log(foo(null)); // 0
console.log(foo(undefined)); //NaN
console.log(foo(10)); // 20
console.log(foo('hello')); //NaN