require('dotenv').config();
const express = require('express');
const app = express();	
const cors = require('cors');
const multer = require('multer');	// for formdata
const upload = multer(); 
const logger = require('morgan');

const passport = require('./utils/passport');
const { mongoConnect } = require('./utils/database');

mongoConnect(() => {
	app.listen(process.env.PORT, () => {
		console.log(`server listening on ${process.env.PORT}`);
	});
})

/* middleware use section */
app.use(express.urlencoded({ extended: true }));	// for application/xwww-form-urlencoded
app.use(upload.array());	// for parsing multipart/form-data
app.use(passport.initialize());
app.use(cors({
	origin: true,
	credentials: true,
}));
app.use(logger(':method :url :response-time ms'));

/* router section */
app.use('/member', require('./router/member'));
app.use('/post', require('./router/post'));