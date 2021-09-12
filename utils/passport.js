const passport = require('passport');
const { Strategy: LocalStrategy }  = require('passport-local');
const Member = require('../models/member');
const { encryptPw } = require('./crypto');
const {
	ExtractJwt,
	Strategy: JWTStrategy,
} = require('passport-jwt');

const member = new Member();

/* strategy */
const passportConfig = {
	usernameField: 'id',
	passwordField: 'pw',
}

const passportVerify = async (id, pw, done) => {
	try {
		const user = await member.findById(id);
		if (!user) {
			done(null, false, { message: 'Non Existing User ID' });
			return;
		} else if (user.pw !== encryptPw(pw)) {
			done(null, false, { message: 'Incorrect Password' });
			return;
		} else {
			done(null, user);
			return;
		}
	} catch (e) {
		done(e);
		return;
	}
}	

const JWTConfig = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
	secretOrKey: process.env.JWT_SECRET_KEY,
}

const JWTVerify = async (payload, done) => {
	console.log('jwt verify');
	console.log(payload);
	try {
		const user = await member.findById(payload.id);
		if (user) {
			done(null, user);
			return;
		}
		done(null, false, { message: 'unauthorized' });
	} catch (e) {
		console.log(e);
		done(e);
	}
}

// [1] login할때 id & passport 검증
passport.use(new LocalStrategy(passportConfig, passportVerify));
// [2] ajax통신시 JWT token 인증
passport.use('jwt', new JWTStrategy(JWTConfig, JWTVerify));

module.exports = passport;