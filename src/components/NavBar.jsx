import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate} from 'react-router'
import { BASE_URL } from '../utils/constants'
import { removeUser } from '../utils/userSlice'

const NavBar = () => {
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  


  const handleLogout = async () => {
    try {
      const res = await axios.post(BASE_URL + "/logout", {}, {withCredentials: true});
      dispatch(removeUser());
      navigate("/login")
    } catch (error) {
      
    }

  }
 


  return (
    <div className="navbar bg-base-300">
<div className="flex-1">
  <Link to="/" className="btn btn-ghost text-xl">👩‍💻🧑‍💻 DevTinder</Link>
</div>
  <div className="flex-none gap-2"> 
  {user && (
       <div className="dropdown dropdown-end mx-6 flex">
        <p className='px-4 py-2'>Welcome, {user.firstName}</p>
       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
         <div className="w-10 rounded-full">
           <img
             alt="user photo"
             src= {user.photoUrl} />
         </div>
       </div>
       <ul
         tabIndex={0}
         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         <li>
           <Link to="/profile" className= "justify-between" >
              Profile
             <span className="badge">New</span>
           </Link>
         </li>
         <li><a>Settings</a></li>
         <li>
          <a onClick={handleLogout}>Logout</a>
          </li>
       </ul>
      </div>

  )}
</div>
</div>
  )
}

export default NavBar

