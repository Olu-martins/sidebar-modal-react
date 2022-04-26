// import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { UseGlobalContext } from './context'

const Home = () => {
  const {openModal, openSidebar} =  UseGlobalContext()
  
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>Show modal</button>      
    </main>
  )
  
}

export default Home
