const crypto = require("crypto");

exports.helloWorld = (req, res) => {
  let response = decrypt(500, 50);
  res.status(200).send(response);
};

const decrypt = (amount, keyLength) => {
  const algorithm = "aes-256-cbc";
  const initVector = crypto.randomBytes(16);
  let encryptedContent = [];

  for (let i = 0; i < amount; i++) {
    const Securitykey = crypto.randomBytes(32);
    const message = getRandomString(keyLength);
    const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
    let encryptedData = cipher.update(message, "utf-8", "hex");
    encryptedContent.push(encryptedData);
  }
  return encryptedContent;
};

const getRandomString = (length) => {
  let result = "";
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};