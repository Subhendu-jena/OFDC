import CryptoJS from 'crypto-js';
const SECRET_KEY = import.meta.env.VITE_CRYPTO_KEY
// console.log(SECRET_KEY,"jkfdj")
// const SECRET_KEY =
//   'b066c79cad3f5eed28a22f55ebaf54c7236b30e44bda6e736cabc75477674f6f';

// export function encryptData(data: any): string {
//   return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
// }
export function encryptData(data: any): any {
  const jsonString = JSON.stringify(data); // ensures valid JSON for decryption
  return CryptoJS.AES.encrypt(jsonString, SECRET_KEY).toString();
}
// console.log(SECRET_KEY, 'SECRET_KEY');

export function decryptData<T>(ciphertext: string): T {
  const bytes = CryptoJS.AES.decrypt(ciphertext,SECRET_KEY);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decrypted);
}
console.log(
  decryptData(
    "U2FsdGVkX1+R8C2/kc1NMKRCIKLZW5+XOOJ9OSeFYgUdlhQ1nS3vKvG7Y4veW2RR6EJqqL9OJxN9KDhUJrTyG8A+q1sLfetJlvVS0rD1SKq0+ON+J94zWjFdHnPCMHAadFcrfkEgQAKWHoZ61RMquY9an520Etb3l5yHEwLEEWME92kvvv2C7SNuB19mx2rz"
  ),
  'payload'
);
// console.log(
//   decryptData(
//     "U2FsdGVkX195InFNqwXZ4Dh3p9J+1TLKlgXDXWUm18+/AWTYniXOKk8Jcv4Zs6NuK/2XcZX5Fae9sFqT5HNosL4YRsdX+QOP8KxX1HxSY9gIPjpNoiktNtwrL8VvqmVsUGrFybKOqA2C8rgLmipN0A=="
//   ),
//   'response'
// );
