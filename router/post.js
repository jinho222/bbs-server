const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.post('/add', (req, res) => {
	Post.addPost(req.body, (e, data) => {
		if (e) console.log(e);
		res.status(200).send({ message: '게시물이 등록되었습니다.' });
	});
});
router.put('/update', (req, res) => {
	console.log(req.body);
	Post.updatePost(req.body, (e, data) => {
		if (e) console.log(e);
		res.status(200).send({ message: '게시물이 수정되었습니다.' });
	});
});

router.delete('/delete', (req, res) => {
	Post.deletePost(req.body, (e, data) => {
		if (e) console.log(e);
		res.status(200).send({ message: '게시물이 삭제되었습니다.' });
	});
});

module.exports = router;