const numbers = [1, 2, 3, 4, 5, 6, 7];

/*const oddNumbers = numbers.filter((n) => n % 2 == 0);
console.log(oddNumbers);

const sum = oddNumbers.reduce((acc, el) => acc + el);
console.log(sum);*/

const sum = numbers.filter((n) => n % 2 == 0).reduce((acc, el) => acc + el);
console.log(sum);
