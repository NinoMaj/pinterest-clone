import React from 'react'
// import styled from 'styled-components'

const SocialAccount = ({ service, username, linked }) => {
  const actionString = linked ? `/unlink/${service}` : `/auth/${service}`

  return (
    <div>
      <div><i className={`fa fa-${service}`} /> {service}</div>
      <div>{username || 'Link your account!'}</div>
      <a
        className="btn btn-secondary"
        href={actionString}
        role="button"
      >{linked ? 'Unlink account' : 'Link account'}
      </a>
    </div>
  )
}

export default SocialAccount
