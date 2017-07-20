import express from 'express'

import Project from '../models/project'

const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  // eslint-disable-next-line no-console
  console.log('Time: ', Date.now())
  next()
})

router.get('/get-projects', (req, res) => {
  const promise = Project.find({}).exec()
  promise.then(projects => (
    res.status(200).send(projects)
  ))
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('Error in get books API:', err)
      return res.status(500).send('Error while getting projects:', err)
    })
})

router.post('/add-project', (req, res) => {
  const {
    author,
    title,
    description,
    imgUrl,
  } = req.body


  const newProject = {
    author,
    title,
    description,
    imgUrl,
  }
  const project = new Project(newProject)

  const promise = project.save()

  promise.then((doc) => {
    // eslint-disable-next-line no-console
    console.log('Project saved', doc)
    res.status(201).send(doc)
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log('Error in saving project API:', err)
    res.status(500).send(err)
  })
})

module.exports = router
