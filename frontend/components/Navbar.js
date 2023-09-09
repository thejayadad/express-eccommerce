'use client'
import React, {useEffect, useState} from 'react'
import { FaShoppingCart } from 'react-icons/fa';

import { useCartContext } from '../ctx/cartContext.js';



const Navbar = ({  logout }) => {
    const [userEmail, setUserEmail] = useState('');
    const { isCartOpen, toggleCart, cartItems } = useCartContext()
    useEffect(() => {
        const email = localStorage.getItem('email');
        setUserEmail(email);
      }, []);
    return (
        <nav className='flex p-8'>
        <div className="navbar-left">
          <h1>Your E-Commerce Store</h1>
        </div>
        <div className="navbar-right">
          {userEmail ? (
            <div className="flex">
              <span>Hello, {userEmail.username}</span>


              <span>Cart: {cartItems?.length}</span>
              <div className="absolute top-4 -right-16 z-10">
                {isCartOpen && <Cart />}
            </div>
              <FaShoppingCart onClick={toggleCart} />
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <div className="flex">
              <a href="/login">Login</a>
              <a href="/register">Register</a>
            </div>
          )}
        </div>
      </nav>
  )
}

export default Navbar