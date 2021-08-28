const express = require('express');
const router = express.Router();
const passport = require('../utils/passport');
const Member = require('../models/member');

/* signup */
router.post('/signup', (req, res) => {
	const { id } = req.body;
	Member.findById(id, (e, data) => {
		if (e) console.log(e);
		console.log(req.body);
		// 중복된 아이디의 회원이 존재할 때
		if (data) {
			res.status('409').send({ message: '이미 존재하는 아이디입니다.' });
		} else {
			Member.signup({ ...req.body }, (e, data) => {
				if (e) console.log(e);
				res.status('200').send({ message: '회원가입에 성공했습니다.' });
			});
		}
	});
})

/* login */
router.post('/login',
		passport.authenticate('local'),
		(req, res) => {
			console.log(req.user);
			res.status(200).send({...req.user});
		}
);

/* logout */
router.post('/logout', (req, res) => {
	req.logout();
	res.status(200).send({ message: '로그아웃되었습니다.' });
})

module.exports= router;