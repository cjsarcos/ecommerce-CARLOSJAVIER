import { Link } from "react-router-dom";
import { CartWidget } from './CartWidget'
import './NavBar.css'

export const NavBar = () => {
  return (

    <header >

      <Link to="/" className="logo">
        <img src="/img/logotlf.png" alt="Logo" />
      </Link>

      <nav className="navbar">
<div className="botoness">
        <Link to="/category/samsung">Samsung</Link>
        <Link to="/category/xiaomi">Xiaomi</Link>
        <Link to="/category/iphone">iphone</Link>
        
        </div>
        <CartWidget />
        </nav>

        

    

    </header>

  )
}