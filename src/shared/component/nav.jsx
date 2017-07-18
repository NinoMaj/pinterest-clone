// @flow

import $ from 'jquery'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { APP_NAME } from '../config'
import {
  HOME_PAGE_ROUTE,
  MY_PROJECTS_ROUTE,
  SETTINGS_PAGE_ROUTE,
  LOGOUT_PAGE_ROUTE,
} from '../routes'

const handleNavLinkClick = () => {
  $('body').scrollTop(0)
  $('.js-navbar-collapse').collapse('hide')
}

const Icon = styled.i`
  font-size: 1.5em;
`

type Props = {
  user: boolean,
}

const Nav = ({ user }: Props) => {
  const leftNav = user ?
  [
    { route: HOME_PAGE_ROUTE, label: 'Home' },
    { route: MY_PROJECTS_ROUTE, label: 'My projects' },
  ]
  :
  [
    { route: HOME_PAGE_ROUTE, label: 'Home' },
    { route: MY_PROJECTS_ROUTE, label: 'My projects' },
  ]

  return (
    <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".js-navbar-collapse">
        <span className="navbar-toggler-icon" />
      </button>
      <Link to={HOME_PAGE_ROUTE} className="navbar-brand">{APP_NAME}</Link>
      <div className="js-navbar-collapse collapse navbar-collapse">
        
        <ul className="navbar-nav mr-auto">
          {[
            ...leftNav,
          ]
          .map(link => (
            <li className="nav-item" key={link.route}>
              <NavLink to={link.route} className="nav-link" activeStyle={{ color: 'white' }} exact onClick={handleNavLinkClick}>{link.label}</NavLink>
            </li>
          ))}
        </ul>

        {user ? (
          <ul className="navbar-nav ml-auto">
            {[
              { route: SETTINGS_PAGE_ROUTE, label: <Icon className="fa fa-cog" title="Settings" /> },
              { route: LOGOUT_PAGE_ROUTE, label: <Icon className="fa fa-power-off" title="Logout" /> },
            ].map(link => (
              <li className="nav-item" key={link.route}>
                <NavLink to={link.route} className="nav-link" activeStyle={{ color: 'white' }} exact onClick={handleNavLinkClick}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="navbar-nav ml-auto">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#loginModal">
              Sign in
            </button>
          </ul>
          )}

        
      </div>
    </nav>
  )
}

export default Nav
