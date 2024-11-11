const {createHash} = require('crypto'); // crypto is a module built into node js

// This function takes an input string, creates a SHA-256 hash, updates the hash with the input data, 
// and then outputs the final hash as a hexadecimal string.
function hash(input) {
    return createHash('sha256').update(input).digest('hex')
}

// Comparing two hashed passwords

let password = "Hello World!";
const hash1 = hash(password);
console.log(hash1);

password = "Hello World";
const hash2 = hash(password);
console.log(hash2);

console.log(hash1 === hash2 ? "Password match" :  "Passwords not matched")