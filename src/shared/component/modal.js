import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from '../../client/store'

// import styled from 'styled-components'
// const ModalContainer = styled.div`
//   position: fixed;
//   top: 80px;
//   left: 40px;
//   right: 40px;
//   bottom: 40px;
//   border: 1px solid #ccc;
//   background: #fff;
//   overflow: auto;
//   border-radius: 4px;
//   outline: none;
//   padding: 20px;
//   display: block;
// `

class Modal extends React.Component {
  componentDidMount() {
    this.modalTarget = document.createElement('div')
    this.modalTarget.className = 'modalTarget'
    document.body.appendChild(this.modalTarget)
    this._render()
  }

  componentWillUpdate() {
    this._render()
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget)
    document.body.removeChild(this.modalTarget)
  }

  _render() {
    ReactDOM.render(
      <Provider store={store}>
        <div>{this.props.children}</div>
      </Provider>,
      this.modalTarget,
    )
  }

  render() {
    return <noscript />
  }
}

export default Modal
