import React from 'react';
import Navbar from './DashboardMenu';
import './Navbar.css'

function App(){
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">React</h1>
      <ul className="nav-menu">
        {Navbar.DashboardMenu.map((item) => {
          return (
            <li>
              <a className={item.className} href={item.url}>{item.title}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default App;
