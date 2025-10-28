// Safely searches for object properties that may not exist 
// without throwing a TypeError
const user = {
    name: "Jim",
    profile: {
        email: "jim@email.com",
        address: {
            street: "123 Road St.",
            city: "Townsville"
        }
    }
};

console.log(user.profile?.address?.street); // 123 Road St.
console.log(user.profile?.phone?.number); // undefined
// The next line will throw a TypeError:
// console.log(user.profile.phone.number);