'use client'
import React, {useEffect, useState} from 'react'
import { FaShoppingCart } from 'react-icons/fa'; // Import the cart icon

const Navbar = ({ cartItems, onLogout }) => {
    const [userEmail, setUserEmail] = useState('');
    useEffect(() => {
        const email = localStorage.getItem('email');
        setUserEmail(email);
      }, []);
    return (
        <nav>
        <div className="navbar-left">
          <h1>Your E-Commerce Store</h1>
        </div>
        <div className="navbar-right">
          {userEmail ? (
            <div className="user-info">
              <span>Hello, {userEmail.username}</span>
              <span>Cart: {cartItems}</span>
              <FaShoppingCart />
              <button onClick={onLogout}>Logout</button>
            </div>
          ) : (
            <div className="auth-links">
              <a href="/login">Login</a>
              <a href="/register">Register</a>
            </div>
          )}
        </div>
      </nav>
  )
}

export default Navbar