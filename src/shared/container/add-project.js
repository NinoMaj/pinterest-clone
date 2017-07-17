import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addProject } from '../actions/projectActions'

class AddProject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputTitle: '',
      inputDescription: '',
      inputImgUrl: '',
      submitted: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    this.props.addProjectAction('author', this.state.inputTitle, this.state.inputDescription, this.state.inputImgUrl)
    this.setState({
      submitted: true,
      inputTitle: '',
      inputDescription: '',
      inputImgUrl: '',
    })
    setTimeout(() => {
      this.setState({
        submitted: false,
      })
    }, 2000)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h4 className="mb-3">Input your project details: </h4>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group row">
            <label htmlFor="text-input" className="col-3 col-form-label">Title:</label>
            <div className="col-9">
              <input className="form-control" type="text" value={this.state.inputTitle} onChange={this.handleChange} id="inputTitle" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="text-input" className="col-3 col-form-label">Description:</label>
            <div className="col-9">
              <input className="form-control" type="text" value={this.state.inputDescription} onChange={this.handleChange} id="inputDescription" />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="text-input" className="col-3 col-form-label">Image URL:</label>
            <div className="col-9">
              <input className="form-control" type="text" value={this.state.inputImgUrl} onChange={this.handleChange} id="inputImgUrl" />
            </div>
          </div>

          <input type="submit" value="Submit" className="btn btn-primary btn-block" />

          {this.state.submitted &&
            <div className="alert alert-success mt-3" role="alert">
              <strong>Well done!</strong> Your project has been submitted successfully.
            </div>
          }

        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addProjectAction: (author, title, description, imgUrl) => {
    dispatch(addProject(author, title, description, imgUrl))
  },
})

export default connect(null, mapDispatchToProps)(AddProject)
