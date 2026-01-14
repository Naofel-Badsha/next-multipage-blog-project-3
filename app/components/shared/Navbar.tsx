import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/*----------Logo-----------*/}
            <div className="">
               <Link href="/">Blog News</Link>
            </div>
            {/*----------Menu-----------*/}
            <div className=""></div>
            {/*----------Button-----------*/}
            <div className=""></div>
        </nav>
    </header>
  )
}

export default Navbar