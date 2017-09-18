import express from 'express'

import User from '../models/user'

const router = express.Router()

router.post('/add-profile', (req, res) => {
  const { id, email, username, fullname, country, city, state } = req.body
  // eslint-disable-next-line consistent-return
  User.findOne({ _id: id }, (err, user) => {
    if (err) {
      return res.status(500).send('Error while getting user:', err)
    }
    const updateUser = user
    updateUser.email = email
    updateUser.userName = username
    updateUser.fullName = fullname
    updateUser.country = country
    updateUser.city = city
    updateUser.state = state

    const promise = user.save()

    promise.then((doc) => {
      res.status(201).send(doc)
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log('Error in saving user profile:', error)
      res.status(500).send(error)
    })
  })
})

router.get('/:user', (req, res) => {
  const promise = User.findOne({ userName: req.params.user }).exec()
  promise
    .then((user) => {
      if (user) { // If user found, create publicUser object and send it
        const publicUser = {
          id: user._id,
          userName: user.userName,
          fullName: user.fullName,
          country: user.country,
          city: user.city,
          state: user.state,
        }

        return res.status(200).send(publicUser)
      }
      // If user doesn't exist, return error object with 404 status code
      return res.status(404).send({ error: 'That user does not exist' })
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('Error in get user public profile API:', err)
      return res.status(500).send({ error: 'Server Error. Couldn\'t get user info' })
    })
})

module.exports = router
