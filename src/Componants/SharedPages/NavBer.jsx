import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


function Navbar() {

  const { user, logOut } = useContext(AuthContext)




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
    {
      user && <li className="P-4">
        <details>
          <summary className="lg:text-gray-300"><NavLink>Dash board</NavLink></summary>
          <ul className="">
            <li className="mb-1"><NavLink to='/addService'
              className={'p-0'}
              style={({ isActive }) => {
                return isActive ? { color: "orange" } : {};
              }}
            >Add Service</NavLink></li>
            <li className="mb-1"><NavLink to='/manage' className={'p-0'}
              style={({ isActive }) => {
                return isActive ? { color: "orange" } : {};
              }}
            >Manage Service</NavLink></li>
            <li className="mb-1"><NavLink to='/booked' className={'p-0'}
              style={({ isActive }) => {
                return isActive ? { color: "orange" } : {};
              }}
            >Booked-Services</NavLink></li>
            <li><NavLink to='/serviceToDo' className={'p-0'}
              style={({ isActive }) => {
                return isActive ? { color: "orange" } : {};
              }}
            > Service-To-Do</NavLink></li>
          </ul>
        </details>
      </li>
    }
  </>



  const handleSignOut = () => {
    logOut()
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="navbar bg-gray-800">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn text-gray-300 btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl"><img src="	https://wp1.yogsthemes.com/wp/sevenbite/wp-content/uploads/2021/08/logo.svg" alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-50">
          {navLink}
        </ul>
      </div>
      <div className="navbar-end lg:mr-10">
        {
          user &&
          <p className="text-red-200 mr-2 flex justify-center items-center">{user.displayName}</p>
        }
        {user ? (
          <div tabIndex={0} role="button" className=" btn-circle avatar tooltip tooltip-bottom">

            <div className="w-10 rounded-full border">
              <img className="profile-img" alt="Profile" src={user.photoURL} />
            </div>
          </div>) : null
        }
        {
          user ?
            <button onClick={handleSignOut} className="bg-[#7AA93C] px-2 py-1 md:px-3 md:py-2 rounded">Log Out</button>
            :
            <Link to='/login'><button className="bg-[#7AA93C] px-2 py-1 md:py-2 md:px-3 rounded">Login</button></Link>
        }
      </div>
    </div>
  );
}

export default Navbar;


