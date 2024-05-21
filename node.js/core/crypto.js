import crypto from 'node:crypto';

// Generating Hashes
const hash = crypto.createHash('sha256');
hash.update('Some data to hash.');
console.log(hash.digest('hex'));  // Outputs the hashed result in hexadecimal format

// HMAC (Hash-based Message Authentication Code)
const hmac = crypto.createHmac('sha256', 'a_secret_key');
hmac.update('Some data to hash with a key.');
console.log(hmac.digest('hex'));  // Outputs the HMAC in hexadecimal format

// Generating Cryptographically Strong Random Bytes
const randomBytes = crypto.randomBytes(16);
console.log(randomBytes.toString('hex'));  // Outputs 16 random bytes in hexadecimal format

// Cipher - Encrypt data
const cipher = crypto.createCipher('aes256', 'a_password');
let encrypted = cipher.update('Some clear text data', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);  // Outputs the encrypted data

// Decipher - Decrypt data
const decipher = crypto.createDecipher('aes256', 'a_password');
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);  // Outputs the original clear text data

// Digital Signatures - Signing data
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 4096
});
const sign = crypto.createSign('SHA256');
sign.update('Some data to sign');
sign.end();
const signature = sign.sign(privateKey);
console.log('Signature:', signature.toString('hex'));

// Digital Signatures - Verifying data
const verify = crypto.createVerify('SHA256');
verify.update('Some data to sign');
verify.end();
console.log(verify.verify(publicKey, signature));  // Outputs true if signature is valid

// Generating Diffie-Hellman key
const dh = crypto.createDiffieHellman(256);
const key = dh.generateKeys();
console.log('Generated Key:', key.toString('hex'));

// ECDH - Elliptic Curve Diffie-Hellman (For Key Exchange)
const ecdh = crypto.createECDH('secp256k1');
ecdh.generateKeys();
console.log('Public Key:', ecdh.getPublicKey().toString('hex'));
console.log('Private Key:', ecdh.getPrivateKey().toString('hex'));

// Note: The 'crypto' module provides many more utilities and functionalities
// This is a concise reference to its primary functions for basic understanding.
