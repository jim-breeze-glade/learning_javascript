function sayHello() {
    return "Hello!";
}

let obj = {
    sayHello: function() {
        return "Hi there!";
    }
};

console.log(sayHello());
console.log(obj.sayHello());