import { NavLink } from "react-router-dom";


function Navbar() {

  const navLink = <>
    <li><NavLink to='/' className="lg:text-gray-300" style={({ isActive }) => {
      return isActive ? { color: "orange" } : {};
    }}>
      Home
    </NavLink></li>
    <li> <NavLink to='/services' className="lg:text-gray-300"
      style={({ isActive }) => {
        return isActive ? { color: "orange" } : {};
      }}>
      Services
    </NavLink></li>
    <li>
      <details>
        <summary className="lg:text-gray-300">Dashboard</summary>
        <ul className="">
          <li className="mb-1"><NavLink className={'p-1'}>Add Service</NavLink></li>
          <li className="mb-1"><NavLink className={'p-0'}>Manage Service</NavLink></li>
          <li className="mb-1"><NavLink className={'p-0'}>Booked-Services</NavLink></li>
          <li><NavLink className={'p-1'}> Service-To-Do</NavLink></li>
        </ul>
      </details>
    </li>
  </>

  return (
    <div className="navbar bg-gray-800">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn text-gray-300 btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}

export default Navbar;

{/* <nav className="bg-gray-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex items-center justify-between h-16">
    <div className="flex items-center">
      <div className="flex-shrink-0">
        <span className="text-white">Logo</span>
      </div>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            Services
          </a>
          <div className="relative">
            <button onClick={toggleDropdown} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring">
              Dashboard
            </button>
            {isOpen && (
              <div className="absolute origin-top-right right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-white ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700" role="menuitem">Add Service</a>
                  <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700" role="menuitem">Manage Service</a>
                  <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700" role="menuitem">Booked Services</a>
                  <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700" role="menuitem">Service To-Do</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</nav> */}
