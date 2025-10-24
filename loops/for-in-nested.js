const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};

function isObject(obj) {
    return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
};

for (const property in person) {
    if (isObject(person[property])) {
        for (const nestedProperty in person[property]) {
        console.log(person[property][nestedProperty]);
        }
    } else {
        console.log(person[property]);
    }
};