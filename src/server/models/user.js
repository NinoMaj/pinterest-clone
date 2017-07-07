// @flow

import mongoose from 'mongoose'

// define the User model schema
const UserSchema = new mongoose.Schema({
  email: String,
  userName: String,
  fullName: String,
  country: String,
  city: String,
  state: String,
  dateCreated: Date,
  projects: Array,  // This will be an array of objects. Each object will be a project
  // To add: liked projects, favorites projects, and maybe a couple more.
  twitter: {
    id: String,
    token: String,
    displayName: String,
    username: String,
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String,
  },
  github: {
    id: String,
    token: String,
    displayName: String,
    username: String,
  },
})

const User = mongoose.model('User', UserSchema)

export default User
