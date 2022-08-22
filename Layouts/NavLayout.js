import React from 'react'
import Navbar from '../components/Navbar'

export default function NavLayout({ children }) {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}
