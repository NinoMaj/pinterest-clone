import mongoose from 'mongoose'

const UserAuthSchema = new mongoose.Schema({
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
})

export default mongoose.model('UserAuth', UserAuthSchema)
