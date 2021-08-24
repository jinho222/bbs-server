const { getDB } = require("../utils/database");

class Post {
	constructor() {}

	static addPost(payload, cb) {
		const db = getDB();
		db.collection('post_count')
			.findOne({ name: 'post_count' }, (e, data) => {
				if (e) console.log(e);
				const { count } = data;
				const _id = count + 1;
				const newPost = {
					_id,
					...payload,
				};
				return db.collection('post')
					.insertOne(newPost, (e, data) => {
						if (e) console.log(e);
						const updateTarget = {
							name: 'post_count',
						};
						const updateContent = {
							$set: {
								count: _id,
							}
						};
						db.collection('post_count')
							.updateOne(updateTarget, updateContent, cb);
					});
			})
	}

	static updatePost(payload, cb) {
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
		return db.collection('post')
			.updateOne(updateTarget, updateContent, cb);
	}

	static deletePost(payload, cb) {
		const db = getDB();
		const { _id } = payload;
		const deleteTarget = {
			_id: parseInt(_id),
		};
		return db.collection('post')
			.deleteOne(deleteTarget, cb);
	}
}

module.exports = Post;