// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-cont">
    <div className="logo-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="heading">Wave</h1>
    </div>
    <ul className="component-cont">
      <li>
        <Link to="/" className="component">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="component">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="component">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
