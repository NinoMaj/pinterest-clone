/* eslint no-shadow: "off", consistent-return: "off" */

import TwitterStrategy from 'passport-twitter'
import GoogleStrategy from 'passport-google-oauth'
import GitHubStrategy from 'passport-github2'
import User from '../models/user'
import configAuth from './auth'

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user)
    })
  })

  passport.use(new TwitterStrategy({
    // pull in our app id and secret from our auth.js file
    consumerKey: configAuth.twitterAuth.consumerKey,
    consumerSecret: process.env.TWITTER_SECRET,
    callbackURL: configAuth.twitterAuth.callbackURL,
    passReqToCallback: true,
  },
  // twitter will send back the token and profile
  (req, token, refreshToken, profile, done) => {
    process.nextTick(() => {
      if (!req.user) {
        // find the user in the database based on their twitter id
        User.findOne({ 'twitter.id': profile.id }, (err, user) => {
          // if there is an error, stop everything and return that
          // ie an error connecting to the database
          if (err) return done(err)

          // if the user is found, then log him in
          if (user) {
            // if there is a user id already but no token (user was linked at one
            // point and then removed), just add our token and profile info.
            if (!user.twitter.token) {
              const addToUser = user
              addToUser.twitter.token = token
              addToUser.twitter.displayName = profile.displayName
              addToUser.twitter.username = profile.username

              user.save((err) => {
                if (err) throw err
                return done(null, user)
              })
            }
            return done(null, user) // user found, return that user
          }

          // if there is no user found with that twitter id, create them
          const newUser = new User()
          // set all of the twitter information in our user model
          newUser.twitter.id = profile.id // set the users twitter id
          newUser.twitter.token = token // we will save the token that twitter provides to the user
          newUser.twitter.displayName = profile.displayName
          newUser.twitter.username = profile.username

          // save our user to the database
          newUser.save((err) => {
            if (err) throw err
            return done(null, newUser)
          })
        })
      // user already exists and is logged in, we have to link accounts
      } else {
        const user = req.user // pull the user out of the session
        // set all of the twitter information in our user model
        user.twitter.id = profile.id
        user.twitter.token = token
        user.twitter.displayName = profile.displayName
        user.twitter.username = profile.username

        // save our user to the database
        user.save((err) => {
          if (err) throw err
          return done(null, user)
        })
      }
    })
  }))

  passport.use(new GoogleStrategy.OAuth2Strategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: configAuth.googleAuth.callbackURL,
    passReqToCallback: true,
  },
  // google will send back the token and profile
  (req, token, refreshToken, profile, done) => {
    process.nextTick(() => {
      if (!req.user) {
        // find the user in the database based on their google id
        User.findOne({ 'google.id': profile.id }, (err, user) => {
          if (err) return done(err)

          // if the user is found, then log them in
          if (user) {
            if (!user.google.token) {
              const addToUser = user
              addToUser.google.token = token
              addToUser.google.name = profile.displayName

              user.save((err) => {
                if (err) throw err
                return done(null, user)
              })
            }
            return done(null, user) // user found, return that user
          }
          // if there is no user found with that google id, create them
          const newUser = new User()
          // set all of the google information in our user model
          newUser.google.id = profile.id // set the users google id
          newUser.google.token = token // we will save the token that google provides to the user
          newUser.google.name = profile.displayName

          // save our user to the database
          newUser.save((err) => {
            if (err) throw err
            return done(null, newUser)
          })
        })
      } else {
        const user = req.user
        // set all of the google information in our user model
        user.google.id = profile.id // set the users google id
        user.google.token = token // we will save the token that google provides to the user
        user.google.name = profile.displayName

        // save our user to the database
        user.save((err) => {
          if (err) throw err
          return done(null, user)
        })
      }
    })
  }))

  passport.use(new GitHubStrategy({
    clientID: configAuth.githubAuth.clientID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: configAuth.githubAuth.callbackURL,
    passReqToCallback: true,
  },
  (req, token, refreshToken, profile, done) => {
    process.nextTick(() => {
      if (!req.user) {
        User.findOne({ 'github.id': profile.id }, (err, user) => {
          if (err) return done(err)

          if (user) {
            if (!user.github.token) {
              const addToUser = user
              addToUser.github.token = token
              addToUser.github.displayName = profile.displayName
              addToUser.github.username = profile.username

              user.save((err) => {
                if (err) throw err
                return done(null, user)
              })
            }
            return done(null, user) // user found, return that user
          }

          // if there is no user found with that github id, create them
          const newUser = new User()
          // set all of the github information in our user model
          newUser.github.id = profile.id // set the users github id
          newUser.github.token = token // we will save the token that github provides to the user
          newUser.github.displayName = profile.displayName
          newUser.github.username = profile.username

          // save our user to the database
          newUser.save((err) => {
            if (err) throw err
            return done(null, newUser)
          })
        })
      // user already exists and is logged in, we have to link accounts
      } else {
        const user = req.user // pull the user out of the session
        // set all of the github information in our user model
        user.github.id = profile.id
        user.github.token = token
        user.github.displayName = profile.displayName
        user.github.username = profile.username

        // save our user to the database
        user.save((err) => {
          if (err) throw err
          return done(null, user)
        })
      }
    })
  }))
}
