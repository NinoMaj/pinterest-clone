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
      console.log('Error in get projects API:', err)
      return res.status(500).send('Error while getting projects:', err)
    })
})

router.post('/add-project', (req, res) => {
  const {
    author,
    title,
    description,
    projectUrl,
    imgUrl,
  } = req.body


  const newProject = {
    author,
    title,
    description,
    projectUrl,
    imgUrl,
  }
  const project = new Project(newProject)

  const promise = project.save()

  promise.then((doc) => {
    res.status(201).send(doc)
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log('Error in saving project API:', err)
    res.status(500).send(err)
  })
})

// TODO: Add ImageURL
router.post('/edit-project/:projectToEdit', (req, res) => {
  const { title, description, projectUrl } = req.body

  const promise = Project.findOne({ _id: req.params.projectToEdit }).exec()
  promise.then((project) => {
    const updatedProject = project
    updatedProject.title = title
    updatedProject.description = description
    updatedProject.projectUrl = projectUrl
    updatedProject.save()
    res.status(200).send(updatedProject)
  })
    .catch((err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log('error in edit project API:', err)
        return res.status(500).send('Error while editing project:', err)
      }
      return res.json()
    })
})

router.put('/pin-project/:projectToPin/:user', (req, res) => {
  const promise = Project.findOne({ _id: req.params.projectToPin }).exec()

  promise.then((project) => {
    project.pinnedBy.addToSet(req.params.user)
    project.save()
    res.status(200).send(project)
  })
    .catch((err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log('error in pin project API:', err)
        return res.status(500).send('Error while pinning project:', err)
      }
      return res.json()
    })
})

router.delete('/delete-project/:projectToDelete', (req, res) => {
  const promise = Project.findOne({ _id: req.params.projectToDelete }).exec()

  promise.then((project) => {
    project.remove()
    res.status(200).send(project)
  })
    .catch((err) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log('error in delete project API:', err)
        return res.status(500).send('Error while deleting project:', err)
      }
      return res.json()
    })
})

module.exports = router
