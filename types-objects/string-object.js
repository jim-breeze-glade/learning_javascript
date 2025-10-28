const helloString = "Hello, world!";
console.log(typeof helloString); // string

const helloObject = new Object("Hello, World!");
console.log(typeof helloObject); // object

console.log(helloString.length === helloObject.length);
/*
    String primitives are generally more memory
    efficient than string objects
*/