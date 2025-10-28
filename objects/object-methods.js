const person = {
    name: "Jim",
    age: 100,
    sayHello: function() {
        return "Hello, my name is " + this.name;
    }
};

console.log(person.sayHello());