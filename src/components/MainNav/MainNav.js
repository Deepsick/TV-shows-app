import React from 'react'
import {NavLink} from 'react-router-dom';

const mainNav = () => {
  return (
      <nav>
    <ul>
        <li>
            <NavLink to='/'>Back</NavLink>
        </li>
    </ul>

      </nav>
  )
}
export default mainNav;