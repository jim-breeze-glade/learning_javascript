const person = {  // Access data from object
    name: "Jim",
    age: 40,
    hobbies: ["coding", "torture", "pain"]
};

console.log(person.name);
console.log(person["hobbies"]);
console.log(person.hobbies[1]);

person.job = "Engineer";  // Add properties to object
person["skill"] = "Staring";

console.log(person);

delete person.age; // Remove property from an object

console.log(person.age); // undefined
console.log(person);

// Check if property exists in object
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("awards"));  // false
// 'in' operator
console.log("name" in person);  // true
