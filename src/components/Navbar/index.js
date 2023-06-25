import {Link} from 'react-router-dom'

import './index.css'

const Navbar = () => {
  return (
    <nav className='nav-bar'>
        <div className="logo">Explore Now</div>
        <ul className="menu">
            <Link to='/' className='nav-link'>
              <li><a href="#">home</a></li>
            </Link>
            <Link to='/admin' className='nav-link'>
              <li><a href="#">Admin</a></li>
            </Link>
            <Link to='/' className='nav-link'> 
              <li><a href="#">tours</a></li>
            </Link>
            <Link to='/' className='nav-link'>
              <li><a href="#">package</a></li>
            </Link>
            <Link to='/' className='nav-link'>
              <li><a href="#">blog</a></li>
            </Link>
            <Link to='/' className='nav-link'>
              <li><a href="#">about us</a></li>
            </Link>
            <Link to='/' className='nav-link'>
              <li><a href="#">contact us</a></li>
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar