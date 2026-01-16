const users = [
    { name: "Amina", role: "admin" },
    { name: "Erik", role: "user" },
    { name: "Sara", role: "admin" }
];

// const admins = users.filter(user => user.role === "admin");

const admins = users.filter(({ role }, index) => {
    console.log(index)
    return role === "admin"
});

console.log("admins - ", admins);
console.log("users - ", users);

