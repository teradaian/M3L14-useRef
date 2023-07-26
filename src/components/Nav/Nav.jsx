import { NavLink } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <NavLink to='/'>Index</NavLink>
      <NavLink to='/signup'>Sign Up</NavLink>
    </nav>
   );
}
 
export default Nav;