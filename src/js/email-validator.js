// const VALID_EMAIL_ENDINGS = ["gmail.com", "outlook.com", "yandex.ru"];

// export function validate(email) {
//   const validEmailEndingsPattern = `(${VALID_EMAIL_ENDINGS.join("|")})$`;
//   const emailRegex = new RegExp(
//     `^[a-zA-Z0-9._%+-]+@${validEmailEndingsPattern}`,
//     "i"
//   );
//   return emailRegex.test(email);
// }
const VALID_EMAIL_ENDINGS = [
  "gmail.com",
  "GMAIL.COM",
  "outlook.com",
  "yandex.ru",
];
const isValid = (email) => {
  for (const endingEl of VALID_EMAIL_ENDINGS) {
    // eslint-disable-next-line no-restricted-syntax
    if (email.endsWith(endingEl)) {
      return true;
    }
  }
  return false;
};
// export default isValid;

// email-validator.js

// Existing validate function
function validate(email) {
  return isValid(email);
}

// New validateAsync function using Promise
async function validateAsync(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(validate(email));
    }, 1000); // Simulating an asynchronous operation
  });
}

// New validateWithThrow function
function validateWithThrow(email) {
  if (!validate(email)) {
    throw new Error("Invalid email: " + email);
  }
  return true;
}

// New validateWithLog function
function validateWithLog(email) {
  const isValid = validate(email);
  console.log(`Email "${email}" is ${isValid ? "valid" : "invalid"}`);
  return isValid;
}

export { validate, validateAsync, validateWithThrow, validateWithLog };

// module.exports = {
//   validate,
//   validateAsync,
//   validateWithThrow,
//   validateWithLog,
// };
