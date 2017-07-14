// @flow

import mongoose from 'mongoose'

const ProjectSchema = new mongoose.Schema({
  // _id  a string representing an author.
  _id: { type: String, required: true },
  title: { type: String, maxlength: 160, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  pinnedBy: [{ type: String }],
})

const Project = mongoose.model('Project', ProjectSchema)

export default Project
