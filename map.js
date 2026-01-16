const numbers = [1, 5, 9, 2, 8]

const square = numbers.map((number, index) => {
    const result = number * number
    console.log(`${index + 1}. ${number} * ${number} = ${result}`)
    return result
});

// x = 1 | 1 * 1 = 1
// x = 2 | 2 * 2 = 4
// x = 3 | 3 * 3 = 9
// x = 4 | 4 * 4 = 16
// x = 5 | 5 * 5 = 25

console.log(square)