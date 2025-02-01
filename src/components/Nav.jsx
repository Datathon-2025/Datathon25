import React from 'react'

const Nav = () => {
  return (
    <nav className='px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Azzle</div>
            <div className='space-x-6'>
                <a href="#about" className='hover:text-gray-400 font-bold'>About</a>
                <a href="#service" className='hover:text-gray-400 font-bold'>Services</a>
                <a href="#pages" className='hover:text-gray-400 font-bold'>Pages</a>
                <a href="#contact" className='hover:text-gray-400 font-bold'>Contact</a>
            </div>
            <div className='space-x-6'>
            <button className='rounded-full bg-white px-4.5 py-2 text-l font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>Login</button>
            <button className='rounded-full bg-black px-4.5 py-2 text-l font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>Signup</button>
            </div>
            
        </div>
    </nav>
  )
}

export default Nav