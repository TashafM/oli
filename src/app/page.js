'use client'
import React, { useState } from 'react'
import HeroSection from './_components/HeroSection'
import Test from './_components/Test'
import { Drawer } from './_components/Drawer'
import AboutSchool from './_components/AboutSchool'
import WhyParentsChooseUs from './_components/WhyParentsChooseUs'
import StoriesSection from './_components/StoriesSection'
import AdmissionCTA from './_components/AdmissionCTA'
import ComingSoon from './_components/ComingSoon'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'
import ParentsTestimonials from './_components/ParentsTestimonials'

const page = () => {
  const [open, setOpen] = useState(false);

  const closeDrawer = () => {
    setOpen(false)
  }
  return (
    <div className='relative'>
      <Navbar show={setOpen}/>
      <HeroSection/>
      <AboutSchool />
      <WhyParentsChooseUs/>
      <StoriesSection/>
      <AdmissionCTA/>
      <ParentsTestimonials/>
      <Footer/>
      {open && <ComingSoon open={open} setOpen={setOpen} close={closeDrawer}/>}
    </div>
  )
}

export default page