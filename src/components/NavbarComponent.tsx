import { NavLink } from 'react-router-dom'

const NavbarComponent = () => {
  return (
    // <div className='flex'>
    //  <NavLink to="/">Home</NavLink> 
    //  <NavLink to="/news">News</NavLink> 
    //  <NavLink to="/weather">Weather</NavLink> 
    // </div>
    <>
      <nav className="bg-gray-800 mb-2">
        <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="Image gallery" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" to="/">Home</NavLink>
                  <NavLink className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to="/news">News</NavLink>
                  <NavLink className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to="/weather">Weather</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <NavLink className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page" to="/">Home</NavLink>
            <NavLink className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" to="/news">News</NavLink>
            <NavLink className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" to="/weather">Weather</NavLink>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarComponent
