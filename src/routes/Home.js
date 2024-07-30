import React from 'react'
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Footer from "../components/Footer";
import Work from "../components/Work";
const home = () => {
  return (
    <div><Navbar/>
    <Heroimg/>
    <Work/>
    <Footer/>
    </div>
  )
};

export default home;