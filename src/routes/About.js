import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimg2 from '../components/Heroimg2';
import AboutContent from '../components/AboutContent';
const About = () => {
  return (
    <div><Navbar/>
    <Heroimg2 heading="ABOUT ME." text="Get To Know More."/>
    <AboutContent/>
    <Footer/></div>
  )
}

export default About