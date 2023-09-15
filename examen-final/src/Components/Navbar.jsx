import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes'
import { useContextGlobal } from './utils/global.context'
import Dhico from '../assets/DH.ico'
import { Moon, Sun } from './Icons'

const Navbar = () => {
  const { themeState, themeDispatch } = useContextGlobal()

  const toggleTheme = () => {
    const newTheme = themeState.theme === "dark" ? "" : "dark";
    themeDispatch({ type: "CHANGE_THEME", payload: newTheme });
  };
  
  return (
    <nav className={`navbar ${themeState.theme}`}>
      <div className='links'>
      <img src={Dhico} alt="" />
        <Link to={routes.home}>
          <h4>Home</h4>
        </Link>
        <Link to={routes.favs}>
          <h4>Favoritos</h4>
        </Link>
        <Link to={routes.contact}>
          <h4>Contacto</h4>
        </Link>
      </div>
      <div className='nav-changeTheme'>
        <button
          onClick={toggleTheme}
          className={themeState.theme}
        >
          {themeState.theme === "" ? <Moon /> : <Sun />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
