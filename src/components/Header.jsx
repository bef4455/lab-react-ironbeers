import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Header() {
  return (
    <>
    <div>
    <header>
        <NavLink to='/'>Home </NavLink>
    </header>
    </div>
    <Outlet/>
    </>
  )
}

export default Header