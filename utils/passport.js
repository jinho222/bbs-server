const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Member = require('../models/member');

passport.serializeUser((user, done) => {             
  done(null, user.id);
});

passport.deserializeUser((id, done) => {          
	Member.findById(id, (e, user) => {
		if (e) return done(e);
		done(null, user);
	})
});

/* strategy */
passport.use(new LocalStrategy({
		usernameField: 'id',
		passwordField: 'pw',
	},
	(id, pw, done) => {
		Member.findById(id, (e, user) => {
			if (e) return done(e);
			if (!user) return done(null, false, { message: 'Non Existing User ID' });
			if (user.pw !== pw) return done(null, false, { message: 'Incorrect Password' });
			return done(null, user);
		})
	}	
));

module.exports = passport;