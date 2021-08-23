const MongoClient = require('mongodb').MongoClient;

let _db;

const mongoConnect = callback => {
	MongoClient.connect(process.env.DB_URL)
	.then(client => {
			_db = client.db('bbs');
			callback();
	})
	.catch(e => { 
		console.log(e);
		throw new Error('mongo connect failed')
	});
}

const getDB = () => {
	if (_db) return _db;
	else throw new Error('get DB failed');
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
