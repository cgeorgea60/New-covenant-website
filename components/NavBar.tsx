import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav>
      <ul className='flex justify-center items-center'>
        <li className='mr-3 md:mx-6 md:text-lg text-sm text-[#245449] font-bold hover:underline'><Link href="/">Home</Link></li>
        <li className='mr-3 md:mx-6 md:text-lg text-sm text-[#245449] font-bold hover:underline '><Link href="/project">Project</Link></li>
        <li className='mr-3 md:mx-6 md:text-lg text-sm text-[#245449] font-bold hover:underline '><Link href="/contact">Contact</Link></li>
        <li className='mr-4 md:mx-6 md:text-lg text-sm text-[#245449] font-bold hover:underline '><Link href="/about">About</Link></li>
        <li className='p-2'><Link href="/register" className='border border-orange-50 bg-[#E96D2F] px-3 py-1 m-1 text-sm tracking-wide md:px-6 md:py-2 text-orange-50 hover:bg-orange-100 hover:text-[#E96D2F] hover:border-[#E96D2F]'>SignUp</Link></li>
        
      </ul>
    </nav>
  )
}

export default NavBar