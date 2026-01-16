const numbers = [1, 30, 4, 100]

// Minst -> Störrst
numbers.sort((a, b) => {
    return a - b;
});

// a = 1, b = 30 | 1 - 30 = -29
// a = 30, b = 4 | 30 - 4 = 26
// a = 1, b = 4 | 1 - 4 = -3
// [1, 4, 30, 100]
// a = 30, b = 100 | 30 - 100 = -70

console.log(numbers);

// Störrst -> Minst
numbers.sort((a, b) => b - a)

console.log(numbers);


// ----------------------------------- Sortera strängar -----------------------------------

const words = ["t", "g", "a", "z", "grill"]

// a -> z 
// words.sort()
words.sort((a, b) => a > b ? 1 : -1)

console.log(words)

// z -> a 
words.sort((a, b) => a > b ? -1 : 1)

console.log(words)