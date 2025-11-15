let inventory = [{name:"paper", quantity: 3}, {name: "flour", quantity: 5}];

function findProductIndex(productName) {
  productName = productName.toLowerCase();
  
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === productName)
      return i;
  }
  return -1;
}

function addProduct(object) {
  object.name = object.name.toLowerCase();
  const idx = findProductIndex(object.name);
  
  if (inventory[idx]) {
    inventory[idx].quantity += object.quantity;
    console.log(`${inventory[idx].name} quantity updated`)
  } else {
    inventory.push(object);
    console.log(`${object.name} added to inventory`)
  }
}

function removeProduct(productName, quantity) {
  productName = productName.toLowerCase();
  const idx = findProductIndex(productName);

  if (inventory[idx]) {
    if (inventory[idx].quantity - quantity > 0) {
      inventory[idx].quantity -= quantity;
      console.log(`Remaining ${productName} pieces: ${inventory[idx].quantity}`);
    } else if (inventory[idx].quantity - quantity === 0) {
      inventory.splice(idx, 1);
    } else if (inventory[idx].quantity - quantity < 0) {
      console.log(`Not enough ${productName} available, remaining pieces: ${inventory[idx].quantity}`);
    }
  } else {
      console.log(`${productName} not found`);
  }
}

removeProduct("steak", 6);
//addProduct({name: "eggs", quantity: 12});
//addProduct({name: "FLoUr", quantity: 5});
console.log(inventory);
//console.log(findProductIndex("flour"));
//addProduct({name: "FLOUR", quantity: 5});
//console.log(inventory[0].quantity);
//removeProduct("FLOUR",2);

