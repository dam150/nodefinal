const generator = require('generate-password');

function generatePassword() {
  const password = generator.generate({
    length: 10,
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: true,
    excludeSimilarCharacters: true,
    strict: true,
  });
  console.log(password);
}

generatePassword();
