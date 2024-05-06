import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav-list'>
        <ul>
            <Link to="/"><li>About</li></Link>
            <Link to="Contact"><li>Contact</li></Link>
            <Link to="WorkExample"><li>Work Example</li></Link>
        </ul>
    </div>
  )
}

export default Nav