function rotate(arr, n) {

  for (let i = 0; i < n; i++) {
   arr.unshift(arr.pop());
  }
  return arr
}
console.log(rotate([1, 2, 3, 4, 5], 3));
