const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Member = require('../models/member');
const encryptPw = require('./crypto').encryptPw;

const member = new Member();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
	member.findById(id, (e, user) => {
		if (e) return done(e);
		console.log('deserialize user');
		console.log(user);
		done(null, user);
	})
});

/* strategy */
passport.use(new LocalStrategy({
		usernameField: 'id',
		passwordField: 'pw',
	},
	(id, pw, done) => {
		member.findById(id).then(user => {
			if (!user) return done(null, false, { message: 'Non Existing User ID' });
			if (user.pw !== encryptPw(pw)) {
				return done(null, false, { message: 'Incorrect Password' });
			}
			return done(null, user);
		}).catch(e => {
			return done(e);
		});
	}	
));

module.exports = passport;