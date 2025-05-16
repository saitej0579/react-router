import logo from '../assets/Logo.svg';
import { NavLink, Link } from "react-router-dom";
import { toast } from 'react-hot-toast'
const Navbar = ({isLogged,setIsLoggedIn}) => {
  return (
    <div className='flex justify-evenly gap-10 bg-richblack-900 p-4 items-center'>

      <Link to='/'>
        <img src={logo} alt='' className='h-8' />
      </Link>

      <div className='flex gap-5 text-richblack-25 text-m'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <div className='flex gap-5 '>
        {!isLogged && <Link to="/login">
          <button className='bg-richblack-800 p-2 text-s rounded-md text-richblack-100 border border-richblack-700' >Login</button>
        </Link>}

        {!isLogged && <Link to="/signup">
          <button className='bg-richblack-800 p-2 text-s rounded-md text-richblack-100 border border-richblack-700'>Sign Up</button>
        </Link>}

        {isLogged && <Link to="/">
          <button 
            className='bg-richblack-800 p-2 text-s rounded-md text-richblack-100 border border-richblack-700'
            onClick={ ()=>{
              setIsLoggedIn(false)
              toast.success('Logged out')
            }}
          >Log out</button>
        </Link>}

        {isLogged && <Link to="/dashboard">
          <button className='bg-richblack-800 p-2 text-s rounded-md text-richblack-100 border border-richblack-700'>Dashboard</button>
        </Link>}
      </div>
    </div>
  );
};

export default Navbar;
