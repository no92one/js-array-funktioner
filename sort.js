const numbers = [1, 30, 4, 100]
/*
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
*/
// ----------------------------------- ÖVNINGAR -----------------------------------

// Övning 1
// Sortera [5, 100, 20, 1] stigande

const numberList = [5, 100, 20, 1]

console.log("Övning 1 -", numberList.sort( (a, b) => a - b ))





// Övning 2
// Sortera samma array fallande

console.log("Övning 2 -", numberList.sort((a, b) => b - a))





// Övning 3
// Sortera en lista av { name, score } efter högst score först

const results = [
    {
        "name": "Anna",
        "score": 420
    },
    {
        "name": "Kalle",
        "score": 340
    },
    {
        "name": "Göran",
        "score": 560
    },
    {
        "name": "Klara",
        "score": 500
    }
]

console.log("Övning 3 -", results.sort( (a, b) =>  b.score - a.score))




// Övning 4
// Filtrera fram personer över 18 och sortera dem på ålder

const people = [
    {
        "name": "Anna",
        "age": 5
    },
    {
        "name": "Bengt",
        "age": 50
    },
    {
        "name": "Fredrik",
        "age": 99
    },
    {
        "name": "Sara",
        "age": 10
    },
    {
        "name": "Kalle",
        "age": 58
    },
    {
        "name": "Gösta",
        "age": 2
    },
    {
        "name": "Klara",
        "age": 47
    }
]

console.log("Övning 4 -", people.filter( person => person.age > 18).sort( (a, b) => a.age - b.age ))
// console.log("Övning 4 -", people.filter(({ age }) => age > 18).sort((a, b) => a.age - b.age))