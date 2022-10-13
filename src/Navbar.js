import './App.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return ( 
    <nav>
      <h1>me<span className='logo-span'>Mart</span></h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/Emen">Men</Link>
        <Link to="/Emenf">Women</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;
