'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/navlogo.png'
import smallLogo from '../../../public/olividya.png'
import { RiMenuUnfold4Line } from 'react-icons/ri'
import { Drawer } from './Drawer'

const Navbar = ({ show }) => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll() // set initial value
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`
        sticky top-0 z-50 h-[70px] px-4 sm:px-10
        flex items-center justify-between relative
          shadow-sm
         backdrop-blur-sm transition-all duration-300
        primary-color
      `}
    >
      {/* Left: Menu */}
      <div
        className={`flex items-center gap-2 cursor-pointer transition-colors duration-300 text-[#2e3a00]`}
        onClick={() => show(true)}
      >
        <RiMenuUnfold4Line size={28} />
        <div className="hidden md:flex text-xl font-extrabold tracking-wider">MENU</div>
      </div>

      {/* Center: Logo (fade out on scroll) */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-3 transition-opacity duration-700 ease-in-out 
          }`}
      // className={`absolute left-1/2 -translate-x-1/2 top-3 transition-opacity duration-700 ease-in-out ${scrolled ? 'opacity-0' : 'opacity-100'
      //   }`}
      >
        {/* <Image
          src={logo}
          alt="Olividay Logo"
          width={scrolled ? 20 : 60}
          height={scrolled ? 20 : 60}
          // className="w-[130px] md:w-[180px] h-auto transition-all duration-500"
        /> */}

        <Image
          src={scrolled ? smallLogo : logo}
          alt="Olividay Logo"
          priority
          className={`transition-all duration-500 ease-in-out ${scrolled
              ? 'w-[60px] md:w-[60px] opacity-90'
              : 'w-[130px] md:w-[180px] opacity-100'
            } h-auto`}
        />

      </div>


      {/* Right: Links */}
      <ul
        className={`hidden md:flex space-x-10  font-semibold transition-colors duration-300 uppercase tracking-widest 'text-[#2e3a00]`}
      >
        <li>
          <Link href="#" className="hover:opacity-80 transition">
            About Olividya
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:opacity-80 transition">
            Services
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:opacity-80 transition">
            Contact
          </Link>
        </li>
      </ul>

      <Drawer open={open} onClose={() => setOpen(false)} title="Menu" side="left">
        {/* your menu content here */}

      </Drawer>
    </div>
  )
}

export default Navbar


