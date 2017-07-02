// @flow

import mongoose from 'mongoose'

// define the User model schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true },
  },
  password: String,
  name: String,
  fullName: String,
  city: String,
  state: String,
  dateCreated: Date,
})

const User = mongoose.model('User', UserSchema)

export default User
