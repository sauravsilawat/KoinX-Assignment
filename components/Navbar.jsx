import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/images/logo.svg';

function Navbar() {
  return (
    <div className='h-[80px] flex items-center justify-between px-20 py-2'>
        <Image src={logo} width={100} ></Image>
        <ul className='flex items-center font-medium gap-[32px]'>
            <li><Link href={'/'}>Crypto Taxes</Link></li>
            <li><Link href={'/'}>Free Tools</Link></li>
            <li><Link href={'/'}>Resource center</Link></li>
            <div className=' py-2 px-8 ml-6 text-white rounded-lg bg-gradient-to-r from-[#2870EA] to-[#1B4AEF]'><button>Get Started</button></div>
        </ul>

    </div>
  )
}

export default Navbar