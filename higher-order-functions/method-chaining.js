const result = ' Hello, World!  '
  .trim()
  .toLowerCase()
  .replace('world', 'JavaScript');

const transactions = [
  { amount: 100, type: 'credit' },
  { amount: 20, type: 'debit' },
  { amount: 150, type: 'credit' },
  { amount: 50, type: 'debit' },
  { amount: 75, type: 'credit' }
];

const totalCreditWithBonus = transactions
  .filter((transaction) => transaction.type === 'credit')
  .map((transaction) => transaction.amount * 1.1)
  .reduce((sum, amount) => sum + amount, 0);

const totalDebit = transactions
  .filter((transaction) => transaction.type === 'debit')
  .map((transaction) => transaction.amount)
  .reduce((sum, amount) => sum + amount, 0);

const creditNoBonus = totalCreditWithBonus / 1.1;

//console.log(result);
console.log(`Credit Total: ${creditNoBonus}`)
console.log(`Credit with Bonus: ${totalCreditWithBonus}`);
console.log(`Debit Total: ${totalDebit}`);
