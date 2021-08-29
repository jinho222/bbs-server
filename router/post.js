const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const post = new Post();

router.post('/add', (req, res) => {
	const payload = {
		...req.body,
	}
	post.addPost(payload).then(data => {
		res.status(200).send({ message: '게시물이 등록되었습니다.' });
	}).catch(e => {
		console.log(e);
	});
});

router.put('/update', (req, res) => {
	console.log(req.body);
	post.updatePost(req.body).then(() => {
		res.status(200).send({ message: '게시물이 수정되었습니다.' });
	}).catch(e => {
		console.log(e);
	})
});

router.delete('/delete', (req, res) => {
	post.deletePost(req.body).then(() => {
		res.status(200).send({ message: '게시물이 삭제되었습니다.' });
	}).catch(e => {
		console.log(e);
	})
});

router.get('/list', async (req, res) => {
	const { pageNo } = req.query;
	try {
		const listData = await post.getPostList({ pageNo });
		const allData = await post.getAllPost();

		const result = {
			totalNumber: allData.length,
			currPagePostNumber: listData.length,
			currPageNo: parseInt(pageNo),
			postList: listData
		}

		res.status(200).send(result);
	} catch (e) {
		console.log(e);
	}
})

router.get('/detail', (req, res) => {
	const { postNo } = req.query;
	post.getPostDetail({ postNo }).then(data => {
		if (!data) res.status(200).send({ message: '해당하는 게시물이 없습니다.' })
		res.status(200).send(data);
	}).catch(e => {
		console.log(e);
	});
})

module.exports = router;