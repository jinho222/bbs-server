const getDB = require('../utils/database').getDB;

class Member {
	constructor() {}

	static findById(id, cb) {
		const db = getDB();
		return db.collection('member').findOne({ id }, cb);
	}

	static signup(payload, cb) {
		const db = getDB();
		return db.collection('member').insertOne({...payload}, cb)
	}
}

module.exports = Member;