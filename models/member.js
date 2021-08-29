const getDB = require('../utils/database').getDB;

class Member {
	constructor() {}

	findById(id) {
		const db = getDB();
		return db.collection('member').findOne({ id });
	}

	signup(payload) {
		const db = getDB();
		return db.collection('member').insertOne({...payload});
	}
}

module.exports = Member;