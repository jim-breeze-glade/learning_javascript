const food = {
    name: "sandwich",
    type: "delicious",
    ingredients: {
        bread: "sourdough",
        meat: "ham",
        cheese: "cheddar",
        condiment: "mustard"
    }
};

function checkObj(obj) {
    return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
};

for (property in food) {
    if (checkObj(food[property])) {
        for (nestedProperty in food[property]) {
            console.log(food[property][nestedProperty]);
        }
    } else {
        console.log(food[property]);
    }
}