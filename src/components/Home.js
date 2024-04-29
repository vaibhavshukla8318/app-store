import React from 'react'
import Navbar from './homeContainer/Navbar'
import Sidebar from './homeContainer/Sidebar'
import Content from './homeContainer/Content'

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <Sidebar/>
        <Content/>
      </div>
    </>
  )
}

export default Home