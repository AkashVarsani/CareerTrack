import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center h-16 px-10 bg-p5 text-white'>
      <span className="logo text-2xl font-bold">
        <span className='text-white'>Career</span>
        <span className='text-p2'>Track</span>
      </span>

      <ul className="menus flex gap-10 text-lg ">
        <Link href="/" className="hover:underline underline-offset-8 decoration-sky-600 decoration-4">Home</Link>
        <Link href="/assessment" className="hover:underline underline-offset-8 decoration-sky-600 decoration-4">Assessment</Link>
        <Link href="/tracks" className="hover:underline underline-offset-8 decoration-sky-600 decoration-4">Tracks</Link>
        <Link href="/upskill" className="hover:underline underline-offset-8 decoration-sky-600 decoration-4">UpSkill</Link>
        <Link href="/network" className="hover:underline underline-offset-8 decoration-sky-600 decoration-4">Network</Link>
        <Link href="/profile" className="hover:underline underline-offset-8 decoration-sky-600 decoration-4">Profile</Link>
        <Link href="/about" className="hover:underline underline-offset-8 decoration-sky-600 decoration-4">About Us</Link>
        <Link href="/contact" className="hover:underline underline-offset-8 decoration-sky-600 decoration-4">Contact</Link>
      </ul>

      <Link href="/login" className="text-xl hover:underline underline-offset-8 decoration-sky-600 decoration-4">LogIn/Sign Up</Link>
    </div>
  )
}

export default Navbar
