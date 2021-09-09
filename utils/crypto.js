const crypto = require('crypto');

exports.encryptPw = function encryptPw(pw) {
	return crypto.createHash('sha512').update(pw).digest('base64');
}