import React from 'react'
import sidebarStyle from '../../css/sidebar.module.css'

const Sidebar = () => {
  return (
    <div className={sidebarStyle.sidebar}>
      <div className={sidebarStyle.top}></div>
      <div className={sidebarStyle.bottom}></div>
    </div>
  )
}

export default Sidebar