import React from 'react'
import Home from '../components/Home';
import Productseason from '../components/Productseason';
import Webelieve from '../components/Webelieve';
import Testimonial from '../components/Testimonial';
import Testimonialnew from '../components/Testimonialnew';
import PrimarySearchAppBar from '../components/PrimarySearchAppBar';

export default function Mainscreen() {
  return (
    <div style={{overflow:'hidden'}}>
      
      {/* <PrimarySearchAppBar></PrimarySearchAppBar> */}
      <Home></Home>
      <Productseason></Productseason>
      <Webelieve></Webelieve>
      <Testimonial></Testimonial>
      <Testimonialnew></Testimonialnew>


    </div>
  )
}
