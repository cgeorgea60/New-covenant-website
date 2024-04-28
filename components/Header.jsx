import React from 'react'
import NavBar from './NavBar'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center top-0 p-6 h-24 sticky z-50 md:px-24'>
        <Link href="/">Logo</Link>
        <div><NavBar /></div>

    </div>
  )
} 

export default Header