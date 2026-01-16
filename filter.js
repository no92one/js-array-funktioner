// Filtrera en lista med objekt
const users = [
    { name: "Amina", role: "admin" },
    { name: "Erik", role: "user" },
    { name: "Sara", role: "admin" }
];

// const admins = users.filter(user => user.role === "admin");

const admins = users.filter(({ role }, index) => {
    console.log(index)
    // Måste använda 'return' när man använder '{ }'
    return role === "admin"
});

console.log("admins - ", admins);
console.log("users - ", users);



// ----------------------------------- ÖVNINGAR -----------------------------------

// Övning 1
// Filtrera fram alla tal större än 100 ur [20, 150, 80, 300, 100].

const numbers = [20, 150, 80, 300, 100]

console.log("Filtrera fram alla tal större än 100 ur [20, 150, 80, 300, 100]. - Result:",
    numbers.filter(number => number > 100))

console.log("Filtrera fram alla tal större än 50 och mindre än 200 ur [20, 150, 80, 300, 100]. - Result:",
    numbers.filter(number => number > 50 && number < 200 ))


// Övning 2
// Filtrera fram alla personer som är över 18 ur en lista av {name, age}.
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

console.log(people.filter(person => person.age > 18))
console.log(people.filter(({age}) => age > 18))


// Övning 3
// Filtrera bort alla tomma strängar ur ["hej", "", "js", "", "!"].

const text = ["hej", "", "js", "", "!"]

console.log(text.filter(t => t !== ""))
console.log(text.filter(t => t.length > 0))
