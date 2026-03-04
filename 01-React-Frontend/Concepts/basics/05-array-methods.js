const numbers = [1, 2, 3, 4]


const doubled = numbers.map(n => n * 2)
console.log("Doubled:", doubled)


const even = numbers.filter(n => n % 2 === 0)
console.log("Even:", even)


const total = numbers.reduce((acc, curr) => acc + curr, 0)
console.log("Total:", total)