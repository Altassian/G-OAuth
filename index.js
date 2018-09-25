const express = require('express');
const app = express();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');


passport.use(
    new GoogleStrategy(
        {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        },
        (accessToken, refreshToken) => {
            console.log('accessToken:',  accessToken);
            console.log('refreshToken:',  refreshToken);
        }
    )
);  

app.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);
app.get('auth/google/callback', passport.authenticate('google'));

app.listen(5003);
console.log('Your app is running at port : 5003 || http://localhost:5003')
