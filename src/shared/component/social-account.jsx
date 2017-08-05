import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 200px;
  padding: 10px;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 5px;
  color: #fff;
  text-shadow: 1px 0 1px rgba(0, 0, 0,.3);
  margin: 2px;
`

// Object to assing proper color to each social card
const color = {
  normal: {
    twitter: '#55acee',
    google: '#dd4b39',
    github: '#444',
  },
  dark: {
    twitter: '#2795e9',
    google: '#c23321',
    github: '#2b2b2b',
  },
}

// Button background and text color changes if account linked or not
const Button = styled.a`
  background-color: ${props => props.linked ? 'inherit' : '#fff'};
  color: ${props => props.linked ? '#fff' : '#000'};
  margin-top: 7px;

  &:hover {
    background-color: ${props => color.dark[props.service]};
    color: #fff;
  }
`

const SocialAccount = ({ service, username, linked }) => {
  // Create string to make request for account linking or unlinking
  const actionString = linked ? `/unlink/${service}` : `/auth/${service}`

  return (
    <Card style={{ backgroundColor: color.normal[service] }}>
      <div>
        <i className={`fa fa-${service} fa-lg fa-fw`} />{`${service[0].toUpperCase()}${service.slice(1)}`}
      </div>
      <div>{username || 'Link me :)'}</div>
      <Button
        linked={linked}
        service={service}
        className="btn btn-secondary"
        href={actionString}
        role="button"
      >{linked ? 'Unlink account' : 'Link account'}
      </Button>
    </Card>
  )
}

export default SocialAccount
