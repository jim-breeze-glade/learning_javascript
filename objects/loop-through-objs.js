const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 75 }
];

for (const product of products) {
  console.log(`Product: ${product.name}, Price: $${product.price}`);
}