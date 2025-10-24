const list = {
    item: "apple",
    color: "red",
    price: .99,
    address: {
        street: "Road St.",
        city: "Townsville",
        zip: 72022
    }
}

for (item in list) {
    console.log(list[item]);
}