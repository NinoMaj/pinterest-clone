import React from 'react'
import SocialButtons from './SocialButtons'

const style = {
  text: {
    textAlign: 'center',
    padding: '10px',
  },
}

const LoginModal = () => (
  <div className="modal fade" id="loginModal" role="dialog" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h5 style={style.text}>Sign in with one of this services</h5>
          <SocialButtons />
        </div>
      </div>
    </div>
  </div>
)

export default LoginModal
