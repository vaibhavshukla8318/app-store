import React from 'react'
import navbarStyle from '../../css/navbar.module.css';

const Navbar = () => {
  return (
    <div className={navbarStyle.navbar}>
      <div className={navbarStyle.left}>App Store</div>
      <div className={navbarStyle.center}>
        <input type='text'></input>
      </div>
      <div className={navbarStyle.right}>
         
      </div>
    </div>
  )
}

export default Navbar