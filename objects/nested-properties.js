// Accessing nested properties
const person = {
    name: "Jim",
    age: 30,
    contact: {
        email: "jim.email.com",
        phone: {
            work: "123-456-7890",
            home: "012-345-6789"
        }
    }
};

console.log(person.contact.phone.work);
console.log(person["contact"]["phone"]["home"]);