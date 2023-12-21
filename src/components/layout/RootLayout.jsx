import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'
import Header from './Header';
import Banner from './Banner';


const RootLayout = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Banner/>
      {/* <Outlet/> */}
     
    </>
  );
}

export default RootLayout
