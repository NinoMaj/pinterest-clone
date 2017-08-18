import React, { Component } from 'react'

class AddProject extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputTitle: '',
      inputDescription: '',
      inputProjectUrl: '',
      inputImgUrl: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEditSubmit = this.handleEditSubmit.bind(this)
  }

  componentWillReceiveProps() {
    if (this.props.editingProjectInfo) {
      console.log('AddProject component will receive new props')
      const { title, description, projectUrl } = this.props.editingProjectInfo
      this.setState({
        inputTitle: title,
        inputDescription: description,
        inputProjectUrl: projectUrl,
      })
    }
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    this.props.addProject(
      this.props.userName,
      this.state.inputTitle,
      this.state.inputDescription,
      this.state.inputProjectUrl,
      this.state.inputImgUrl,
    )

    this.setState({
      inputTitle: '',
      inputDescription: '',
      inputProjectUrl: '',
      inputImgUrl: '',
    })

    this.props.displayNotification(
      'success',
      'Well done!',
      'Your project has been submitted successfully',
    )

    event.preventDefault()
  }

  handleEditSubmit(event) {
    this.props.editProject(
      this.props.editingProjectInfo.projectId,
      this.state.inputTitle,
      this.state.inputDescription,
      this.state.inputProjectUrl,
    )

    this.setState({
      inputTitle: '',
      inputDescription: '',
      inputProjectUrl: '',
      inputImgUrl: '',
    })

    this.props.displayNotification(
      'success',
      'Project edited!',
      'Your project has been edited and updated successfully',
    )

    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h4 className="mb-3">Input your project details: </h4>
        <form onSubmit={this.handleEditSubmit}>

          <div className="form-group row">
            <label htmlFor="text-input" className="col-3 col-form-label">Title:</label>
            <div className="col-9">
              <input
                className="form-control"
                type="text"
                value={this.state.inputTitle}
                onChange={this.handleChange}
                id="inputTitle"
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="text-area" className="col-3 col-form-label">Description:</label>
            <div className="col-9">
              <textarea
                className="form-control"
                rows="3"
                type="text"
                value={this.state.inputDescription}
                onChange={this.handleChange}
                id="inputDescription"
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="text-input" className="col-3 col-form-label">Project URL:</label>
            <div className="col-9">
              <input
                className="form-control"
                type="text"
                value={this.state.inputProjectUrl}
                onChange={this.handleChange}
                id="inputProjectUrl"
              />
            </div>
          </div>

          <div className="form-group row">
            <label htmlFor="text-input" className="col-3 col-form-label">Image URL:</label>
            <div className="col-9">
              <input
                className="form-control"
                type="text"
                value={this.state.inputImgUrl}
                onChange={this.handleChange}
                id="inputImgUrl"
              />
            </div>
          </div>

          <input
            type="submit"
            value="Submit"
            className="btn btn-primary btn-block"
            style={{ cursor: 'pointer' }}
          />

        </form>
      </div>
    )
  }
}

export default AddProject
