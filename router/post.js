const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const post = new Post();

router.get('/', (req, res) => {
	const { postNo } = req.query;
	post.getPostDetail({ postNo }).then(data => {
		if (!data) res.status(200).send({ message: '해당하는 게시물이 없습니다.' })
		res.status(200).send(data);
	}).catch(e => {
		console.log(e);
	});
})


router.post('/', (req, res) => {
	const payload = {
		...req.body,
	}
	post.addPost(payload).then(data => {
		res.status(200).send({ message: '게시물이 등록되었습니다.' });
	}).catch(e => {
		console.log(e);
	});
});

router.put('/', (req, res) => {
	console.log(req.body);
	post.updatePost(req.body).then(() => {
		res.status(200).send({ message: '게시물이 수정되었습니다.' });
	}).catch(e => {
		console.log(e);
	})
});

router.delete('/', (req, res) => {
	post.deletePost(req.body).then(() => {
		res.status(200).send({ message: '게시물이 삭제되었습니다.' });
	}).catch(e => {
		console.log(e);
	})
});

router.get('/list', (req, res) => {
	console.log('GET list');
	res.send({
		totalCnt: 32,
		pageNo: 1,
		postsPerPage: 5,
		postList: [
			{
				_id: 38,
				title: '정은이랑 카페왔음',
				content: '정은이는 매우 예쁩니다\n\nㅇㅈ? ㅇ ㅇㅈ',
				author_id: 'twosome123',
				author_idx: '613c61c4d1caac3adc74ad64',
				date: '2021-09-11'
			},
			{
				_id: 37,
				title: '서버사이드렌더링',
				content: '성공...?',
				author_id: 'nodetesting',
				author_name: '악동뮤지션',
				date: '2021-09-09'
			},
			{
				_id: 36,
				title: '안녕하세용',
				content: 'npm run build 입니다',
				author_id: 'nodetesting',
				author_name: '악동뮤지션',
				author_idx: '613a1b02d56d437c97fd549c',
				date: '2021-09-09'
			},
			{
				_id: 35,
				title: '깃허브 데스크탑',
				content: '깃은 중요합니다',
				author_id: 'issueissueissue',
				author_name: '안녕하세요',
				author_idx: '61396ce34eeb591cfa2f3337',
				date: '2021-09-09'
			},
			{
				_id: 34,
				title: '암호화 모듈을 붙여보았습니다.',
				content: '잘 작동합니다.',
				author_id: 'cryptotest',
				author_name: '초이지노',
				author_idx: '6139681d0700a78060900b97',
				date: '2021-09-09'
			}
		]
	})
})

// router.get('/list', async (req, res) => {
// 	const { pageNo } = req.query;
// 	console.log(pageNo);
// 	try {
// 		const listData = await post.getPostList({ pageNo });
// 		const allData = await post.getAllPost();

// 		const result = {
// 			totalCnt: allData.length,
// 			pageNo: parseInt(pageNo),
// 			postsPerPage: 5,
// 			postList: listData
// 		}

// 		console.log(result);

// 		res.status(200).send(result);
// 	} catch (e) {
// 		console.log(e);
// 	}
// })

module.exports = router;