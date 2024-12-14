import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'
import { removeUser } from '../utils/userSlice'
import { 
  LogOut, 
  User, 
  Network, 
  Home, 
  CodeIcon 
} from 'lucide-react'

const NavBar = () => {
  const user = useSelector((store) => store.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, {withCredentials: true});
      dispatch(removeUser());
      navigate("/login")
    } catch (error) {
      console.error("Logout failed", error);
    }
  }

  return (
    <nav className="bg-[#0A192F] text-[#CCD6F6] py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link 
          to="/" 
          className="flex items-center text-2xl font-bold hover:text-[#64FFDA] transition-colors"
        >
          <CodeIcon className="mr-3 text-[#64FFDA]" size={32} />
          DevTinder
        </Link>

        {/* Navigation for Authenticated Users */}
        {user && (
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {/* Navigation Links */}
              <Link 
                to="/" 
                className="flex items-center hover:text-[#64FFDA] transition-colors"
              >
                <Home className="mr-2" size={20} />
                Home
              </Link>
              <Link 
                to="/requests" 
                className="flex items-center hover:text-[#64FFDA] transition-colors"
              >
                <User className="mr-2" size={20} />
                Requests
              </Link>
              <Link 
                to="/connections" 
                className="flex items-center hover:text-[#64FFDA] transition-colors"
              >
                <Network className="mr-2" size={20} />
                Connections
              </Link>
            </div>

            {/* User Profile Dropdown */}
            <div className="dropdown dropdown-end">
              <div 
                tabIndex={0} 
                role="button" 
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-12 rounded-full border-2 border-[#64FFDA]">
                  <img
                    alt="User profile"
                    src={user.photoUrl}
                    className="object-cover"
                  />
                </div>
              </div>
              <ul 
                tabIndex={0} 
                className="dropdown-content z-[1] menu p-2 shadow-2xl bg-[#112240] rounded-box w-52 border-2 border-[#64FFDA]/20"
              >
                <li className="text-[#8892B0] hover:bg-[#64FFDA]/10 rounded-lg">
                  <p className="text-sm font-bold">Welcome, {user.firstName}</p>
                </li>
                <li className="hover:bg-[#64FFDA]/10 rounded-lg">
                  <Link 
                    to="/profile" 
                    className="flex items-center justify-between text-[#CCD6F6]"
                  >
                    <User className="mr-2" size={18} /> 
                    Profile
                    <span className="badge bg-[#64FFDA] text-[#0A192F]">New</span>
                  </Link>
                </li>
                <li className="hover:bg-[#64FFDA]/10 rounded-lg">
                  <button 
                    onClick={handleLogout} 
                    className="flex items-center text-red-400 hover:text-red-300"
                  >
                    <LogOut className="mr-2" size={18} /> 
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar