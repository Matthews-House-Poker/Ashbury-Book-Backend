const { createHmac } = require("crypto");

module.exports = async (text, salt) => {
    const hmac = createHmac('sha512', text)
        .update(salt);

    return hmac.digest('hex');
}