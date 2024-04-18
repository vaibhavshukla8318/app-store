import React from 'react'
import Navbar from './homeContainer/Navbar'
import Sidebar from './homeContainer/Sidebar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div>
        <Sidebar/>
      </div>
    </>
  )
}

export default Home