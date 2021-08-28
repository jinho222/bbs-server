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

/* middleware section start */

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// for parsing multipart/form-data
app.use(upload.array());
app.use(session({
	secret: '!@#$!@#$',
	resave: false,
	saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

/* middleware section end */

/* routing section start */
app.use('/member', require('./router/member'));
app.use('/post', require('./router/post'));