function evenOrOdd(arr) {
  const even = arr.filter( num => num % 2 == 0 )
  const odd =  arr.filter( num => num % 2 !== 0 )

  return {
   even,
   odd,
  };
}
let numArray = [1, 36, 2, 56, 9, 23, 5, 72, 36];
const { even, odd } = evenOrOdd(numArray)
console.log(odd); // =>  [1, 9, 23, 5]
console.log(even); // =>  [36, 2, 56, 72, 36]