import React from 'react'
import sidebarStyle from '../../css/sidebar.module.css'
import Home from '../../images/home.png';
import App from '../../images/app.png';

const Sidebar = () => {
  return (
    <div className={sidebarStyle.sidebar}>
      <div className={sidebarStyle.top}>
         <img src={Home} alt='home'/>
         <img src={App} alt='app'/>
      </div>
      <div className={sidebarStyle.bottom}></div>
    </div>
  )
}

export default Sidebar

