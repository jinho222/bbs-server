const express = require('express');
const router = express.Router();
const { encryptPw } = require('../utils/crypto');
const passport = require('../utils/passport');
const Member = require('../models/member');
const jwt = require('jsonwebtoken');

const member = new Member();

/* signup */
router.post('/signup', async (req, res) => {
	try {
		const {
			id,
			pw,
		} = req.body;
		const data = await member.findById(id);

		// 중복된 아이디의 회원이 존재할 때
		if (data) {
			res.status(409).send({ message: '이미 존재하는 아이디입니다.' });
			return;
		}

		// 회원가입 성공시
		await member.signup({ 
			...req.body,
			pw: encryptPw(pw),
			});
			res.status(200).send({ message: '회원가입에 성공했습니다.'});
		} catch (e) {
			console.log(e);
		}
	});
	
/* login */
router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
	const {
		id,
		name
	} = req.user;
	const token = jwt.sign({ id, name }, process.env.JWT_SECRET_KEY);
	res.status(200).send({
		user_info: {...req.user},
		token,
	});
});

/* logout */
router.post('/logout', (req, res) => {
	req.logout();
	res.status(200).send({ message: '로그아웃되었습니다.' });
})

module.exports= router;