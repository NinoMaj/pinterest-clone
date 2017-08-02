import express from 'express'

import User from '../models/user'

const router = express.Router()

// router.get('/get-profile/:userId', (req, res) => {
//   const promise = User.findOne({ id: req.params.userId })
//   promise
//     .then(user => res.status(200).send(user))
//     .catch((err) => {
//       // eslint-disable-next-line no-console
//       console.log('Error in get user profile API:', err)
//       return res.status(500).send('Error while getting user profile:', err)
//     })
// })

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

module.exports = router
