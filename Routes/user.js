const express = require('express');
const router = express.Router();
const wrapAsync = require('../utility/wrapAsync.js');
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');
const userController = require('../controllers/users.js');

router.route("/signup")
    .get( userController.renderSignup)
    .post( wrapAsync(userController.signupuser));


router.route("/login")
    .get(userController.renderLogin)
    .post(
        saveRedirectUrl,
        (req, res, next) => {
            console.log('Login attempt body:', req.body);
            passport.authenticate('local', (err, user, info) => {
                if (err) return next(err);
                if (!user) {
                    console.log('Auth failed:', info);
                    req.flash('error', info && info.message ? info.message : 'Invalid username or password');
                    return res.redirect('/login');
                }
                req.logIn(user, (err) => {
                    if (err) return next(err);
                    console.log('Auth success for user:', user.username);
                    req.flash('success', 'Welcome back!');
                    let redirectUrl = req.session.redirectUrl || '/listings';
                    delete req.session.redirectUrl;
                    return res.redirect(redirectUrl);
                });
            })(req, res, next);
        }
    );


router.get('/logout', userController.logoutuser);

module.exports = router;