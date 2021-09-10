const express = require('express');
const app = express();	
const session = require('express-session');
const cors = require('cors');
const multer = require('multer');	// for formdata
const path = require('path');
const upload = multer(); 

const passport = require('./utils/passport');
const mongoConnect = require('./utils/database').mongoConnect;

require('dotenv').config();	

mongoConnect(() => {
	app.listen(process.env.PORT || 5000, () => {
		console.log(`server listening on ${process.env.PORT}`);
	});
})

/* middleware use section */
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));	// for application/xwww-form-urlencoded
app.use(upload.array());	// for parsing multipart/form-data
app.use(session({
	secret: process.env.SECRET_CODE,
	resave: false,
	saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
	origin: true,
	credentials: true,
}));

/* router section */
app.use('/member', require('./router/member'));
app.use('/post', require('./router/post'));

/* rendering  */
// 1. basic
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});
// 2. reload or input url
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});