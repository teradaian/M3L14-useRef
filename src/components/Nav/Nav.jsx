import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <NavLink to='/'>Index</NavLink>
      <NavLink to='/new'>New</NavLink>
    </nav>
   );
}
 
export default Nav;