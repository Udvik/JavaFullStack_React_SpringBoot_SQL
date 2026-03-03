
const arr1 = [1, 2]
const arr2 = [...arr1, 3, 4]
console.log(arr2)


function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}

console.log(sum(1, 2, 3, 4))