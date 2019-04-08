import React from 'react'
import {NavLink} from 'react-router-dom';

const mainNav = () => {
  return (
      <nav>
    <ul>
        <li>
            <NavLink to='/'>Main</NavLink>
        </li>
        <li>
            <NavLink to={'/search' + `?query=`}>Search</NavLink>
        </li>
    </ul>

      </nav>
  )
}
export default mainNav;