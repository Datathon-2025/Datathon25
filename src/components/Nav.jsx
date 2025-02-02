const Nav = () => {
  const onLogin = () => {
    window.location.href = 'https://small-mouse-2759.arnabbhowmik019.workers.dev/google/auth/ads-search-console?redirect_url=http://localhost:5173/login'
  }
  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
        <div className='text-3xl font-bold text-gray-800'>Datathon</div>
        {/* <div className='hidden md:flex space-x-8'>
          <a href="#about" className='text-gray-600 hover:text-gray-900 font-medium'>About</a>
          <a href="#service" className='text-gray-600 hover:text-gray-900 font-medium'>Services</a>
          <a href="#pages" className='text-gray-600 hover:text-gray-900 font-medium'>Pages</a>
          <a href="#contact" className='text-gray-600 hover:text-gray-900 font-medium'>Contact</a>
        </div> */}
        <div className='flex space-x-4'>
          <button onClick={onLogin} className='rounded-full bg-gray-100 px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200'>Login</button>
          <button onClick={onLogin} className='rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700'>Signup</button>
        </div>
      </div>
    </nav>
  )
}

export default Nav