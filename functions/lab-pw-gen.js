const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()" // 72 length


function generatePassword(pwLen) {
let pw = '';
  for (let i = 0; i < pwLen; i++) {
    pw += chars.charAt(Math.floor(Math.random() * 72));
  }
  return pw;
}

const password = generatePassword(50);
console.log(`Generated password: ${password}`);
