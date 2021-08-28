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

router.get('/list', (req, res) => {
	const { pageNo } = req.query;
	Post.getPostList({ pageNo }, (e, listData) => {
		if (e) console.log(e);
		Post.getAllPost((e, allData) => {
			if (e) console.log(e);
			const result = {
				totalNumber: allData.length,
				currPagePostNumber: listData.length,
				currPageNo: parseInt(pageNo),
				postList: listData
			}
			res.status(200).send(result);
		})
	})
})

router.get('/detail', (req, res) => {
	const { postNo } = req.query;
	Post.getPostDetail({ postNo }, (e, data) => {
		if (e) console.log(e);
		if (!data) res.status(200).send({ message: '해당하는 게시물이 없습니다.' })
		res.status(200).send(data);
	})
})

module.exports = router;