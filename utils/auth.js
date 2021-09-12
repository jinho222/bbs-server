exports.authCheck = function (req, res, next) {
	console.log('auth check');
	if (req.user) {
		console.log(req.user);
		res.status(401).send({
			message: '쿠키가 만료되었습니다.\n다시 로그인해주세요.'
		});
	} else {
		next();
	}
}