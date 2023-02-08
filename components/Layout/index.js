import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer/index';

function Layout({children}) {
  return (
    <>
      <Nav />
      {children}
      <Footer/>
    </>
  )
}

export default Layout