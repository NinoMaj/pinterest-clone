// @flow

import React from 'react'

type Props = {
  id: string,
  children: any,
}

const ModalMain = ({ id, children }: Props) => (
  <div className="modal fade mt-5" id={id} role="dialog" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-body">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          {children}
        </div>
      </div>
    </div>
  </div>
)

export default ModalMain
