const VALID_EMAIL_ENDINGS = ["gmail.com", "outlook.com", "yandex.ru"];

export function validate(email) {
  const validEmailEndingsPattern = `(${VALID_EMAIL_ENDINGS.join("|")})$`;
  const emailRegex = new RegExp(
    `^[a-zA-Z0-9._%+-]+@${validEmailEndingsPattern}`,
    "i"
  );
  return emailRegex.test(email);
}
