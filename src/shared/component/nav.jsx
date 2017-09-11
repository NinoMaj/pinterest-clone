// @flow

import $ from 'jquery'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { APP_NAME } from '../config'
import {
  HOME_PAGE_ROUTE,
  MY_PROJECTS_ROUTE,
  SAVED_PROJECTS_ROUTE,
  PROFILE_PAGE_ROUTE,
  LOGOUT_PAGE_ROUTE,
} from '../routes'

const handleNavLinkClick = () => {
  $('body').scrollTop(0)
  $('.js-navbar-collapse').collapse('hide')
}

const Button = styled.button`
  cursor: pointer;
  font-family: inherit;
`

type Props = {
  user: boolean,
}

const Nav = ({ user }: Props) => {
  const leftNavLinks = [ // Objects with the info navbar left links
    {
      route: MY_PROJECTS_ROUTE,
      label: 'My projects',
      icon: <span />,
    },
    {
      route: SAVED_PROJECTS_ROUTE,
      label: 'Saved projects',
      icon: <span />,
    },
    {
      route: PROFILE_PAGE_ROUTE,
      icon: <i className="fa fa-user-o fa-lg fa-fw" title="Profile" />,
      label: 'Profile',
    },
    {
      route: LOGOUT_PAGE_ROUTE,
      icon: <i className="fa fa-power-off fa-lg fa-fw" title="Logout" />,
      label: 'Logout',
    },
  ]

  const userNav = user ? // If user is logged in display nabvar left links
    (leftNavLinks.map(link => (
      <li className="nav-item" key={link.route}>
        <NavLink
          to={link.route}
          className="nav-link"
          activeStyle={{ color: 'white' }}
          exact
          onClick={handleNavLinkClick}
        >{link.icon}{link.label}
        </NavLink>
      </li>
    )))
    : // Otherwise display Sign in button
    (<Button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#loginModal">
      Sign in
    </Button>)

  return (
    <nav className="navbar navbar-toggleable navbar-inverse fixed-top bg-inverse">

      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarLinks"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <Link to={HOME_PAGE_ROUTE} className="navbar-brand">{APP_NAME}</Link>

      <div className="collapse navbar-collapse" id="navbarLinks">
        <ul className="navbar-nav ml-auto">
          {userNav}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
