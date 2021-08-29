const { getDB } = require("../utils/database");

class Post {
	constructor() {}

	async addPost(payload) {
		try {
			// 게시물 _id 설정을 위해 post_count 컬렉션을 열람
			const db = getDB();
			const { count } = await db.collection('post_count').findOne({ name: 'post_count' });
			const _id = count + 1;
			const newPost = {
				_id,
				...payload,
			}

			// 게시물 추가 및 post_count 업데이트
			await db.collection('post').insertOne(newPost)
			const updateTarget = {
				name: 'post_count',
			};
			const updateContent = {
				$set: {
					count: _id,
				}
			};
			
			return db.collection('post_count').updateOne(updateTarget, updateContent);
			} catch (e) {
				console.log(e);
		}
	}

	updatePost(payload) {
		const db = getDB();
		const { _id, title, content } = payload;
		const updateTarget = {
			_id: parseInt(_id),
		};
		const updateContent = {
			$set: {
				title,
				content
			}
		};
		return db.collection('post').updateOne(updateTarget, updateContent);
	}

	deletePost(payload) {
		const db = getDB();
		const { _id } = payload;
		const deleteTarget = {
			_id: parseInt(_id),
		};
		return db.collection('post').deleteOne(deleteTarget);
	}

	getPostList(payload) {
		const db = getDB();
		const { pageNo } = payload;
		const limit = 5;
		const offset = (pageNo - 1) * limit;
		return db.collection('post').find().skip(offset).limit(limit).toArray();
	}

	getPostDetail(payload) {	
		const db = getDB();
		const { postNo } = payload;
		return db.collection('post').findOne({ _id: parseInt(postNo) });
	}

	getAllPost() {
		const db = getDB();
		return db.collection('post').find().toArray();
	}
}

module.exports = Post;