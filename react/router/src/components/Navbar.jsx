import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    const navStyle ={
        marginLeft: "30px",
    }
    return (
        <nav className='navstyle'>
            <li> <Link to={'/home'}>Home</Link></li>
            <li> <Link to={'/about'}>About</Link></li>
            <li> <Link to={'/contact'}>Contact</Link></li>
            <li><a href="/login">Login</a></li>
        </nav>
    )
}

export default Navbar
