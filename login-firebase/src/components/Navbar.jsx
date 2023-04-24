import React from 'react'
import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {

  const location = useLocation();

  return (
    <div>
      <nav className='flex justify-around mb-9'>
        <Link className={location.pathname === '/' ? 'text-xl font-bold text-indigo-800 underline' : 'text-lg font-bold'} to='/'>Home</Link>
        <Link className={location.pathname === '/login' ? 'text-xl font-bold text-indigo-800 underline' : 'text-lg font-bold'} to='/login'>Login</Link>
        <Link className={location.pathname === '/register' ? 'text-xl font-bold text-indigo-800 underline' : 'text-lg font-bold'} to='/register'>Register</Link>
      </nav>
    </div>
  )
}

export default Navbar