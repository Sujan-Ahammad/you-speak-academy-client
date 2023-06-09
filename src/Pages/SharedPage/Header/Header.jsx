
import {  Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
// import { FaShoppingCart } from "react-icons/fa";

const Header = () => {

  const {user,signInOutUser}=useAuth()

  const handleLogOUt=()=>{
    signInOutUser()
    .then(()=>{

    })
    .catch(error=>{
      console.log(error.message);
    })
  }

  const navItems = (
    <>
      <li><NavLink className={({isActive})=>isActive?'text-orange-400 font-bold':''} to="/">HOME</NavLink></li>
      <li><NavLink className={({isActive})=>isActive?'text-orange-400 font-bold':''} to="/allinstructor">INSTRUCTORS</NavLink></li>
      <li><NavLink className={({isActive})=>isActive?'text-orange-400 font-bold':''} to="/allclassess">CLASSESS</NavLink></li>
      <li><NavLink className={({isActive})=>isActive?'text-orange-400 font-bold':''} to="/dashboard">DASHBOARD</NavLink></li>
      {user 
      ? 
      <>
      {/* <li><NavLink className={({isActive})=>isActive?'text-orange-400 font-bold':''} to="/order/salad" title={user?.displayName}>Profile</NavLink></li> */}
      <li className=""><img className="rounded-full w-20 h-20 " src={user.photoURL} alt="" /></li>
      <li><button onClick={handleLogOUt} className="btn btn-ghost text-red-400">LOG OUT</button></li>
      </>
      :
      <li><NavLink className={({isActive})=>isActive?'text-orange-400 font-bold':''} to="/login">LOGIN</NavLink></li>
      }
    </>

    
  );
  return (
    <div className="navbar bg-black text-white  fixed z-10 bg-opacity-30">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact text-black dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div className="">
          <Link to='/' className="btn btn-ghost normal-case  lg:text-2xl ">Speak Academy</Link>

        </div>
      </div>
      <div className="navbar-end">
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>

      </div>
    </div>
  );
};

export default Header;
