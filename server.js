const express = require('express');
const app = express();	
const session = require('express-session');
const cors = require('cors');
const multer = require('multer');	// for formdata
const upload = multer(); 

const passport = require('./utils/passport');
const mongoConnect = require('./utils/database').mongoConnect;

require('dotenv').config();	

mongoConnect(() => {
	app.listen(process.env.PORT, () => {
		console.log(`server listening on ${process.env.PORT}`);
	});
})

/* middleware use section */
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
app.use((req, res, next) => {
	console.log('request');
	next();
})

/* router section */
app.use('/member', require('./router/member'));
app.use('/post', require('./router/post'));