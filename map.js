const numbers = [4, 6, 8, 10];
const output = [];

//One way to double numbers
for (const number of numbers) {
    output.push(number * 2);
}
console.log(output);

//Another way to double numbers
const doubleIt = number => number * 2;

//Best way to double it

//1. loop through each element,
//2. for each element, call the provided function,
//3. result for each element will be stored in an array.
const output2 = numbers.map(doubleIt);
console.log(output2);

//can also put a function directly

const output3 = numbers.map(number => number * 2);
console.log(output3);