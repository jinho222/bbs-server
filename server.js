const express = require('express');
const app = express();
const session = require('express-session');
const passport = require('./utils/passport');
const mongoConnect = require('./utils/database').mongoConnect;

require('dotenv').config();

mongoConnect(() => {
	app.listen(process.env.PORT, () => {
		console.log(`server listening on ${process.env.PORT}`);
	});
})

/* middleware section start */

app.use(express.urlencoded({ extended: false }));
app.use(session({
	secret: '!@#$!@#$',
	resave: false,
	saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

/* middleware section end */

/* routing section start */
app.use('/member', require('./router/member'));
