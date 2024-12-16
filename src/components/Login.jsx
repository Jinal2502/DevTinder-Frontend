import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'
import { 
  LogIn, 
  Mail, 
  Lock, 
  AlertTriangle, 
  EyeOff, 
  Eye 
} from 'lucide-react'

const Login = () => {
  const [emailId, setEmailId] = useState("tyson.jr11@gmail.com");
  const [password, setPassword] = useState("Jinal25022006#");
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    try {
      const res = await axios.post(BASE_URL + "/login", {
        emailId,
        password,
      }, 
      {withCredentials: true}
      );
      dispatch(addUser(res.data));
      navigate("/")
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen bg-[#0A192F] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-[#112240] p-10 rounded-2xl shadow-2xl border-2 border-[#64FFDA]/20">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-[#CCD6F6] flex items-center justify-center">
            <LogIn className="mr-3 text-[#64FFDA]" size={32} />
            DevTinder Login
          </h2>
          <p className="mt-2 text-sm text-[#8892B0]">
            Connect with developers across the world
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}>
          <div className="rounded-md shadow-sm -space-y-px">
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="text-[#8892B0]" size={20} />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                  className="appearance-none rounded-lg relative block w-full px-10 py-3 
                    border-2 border-[#64FFDA]/20 placeholder-[#8892B0] 
                    bg-[#0A192F] text-[#CCD6F6] 
                    focus:outline-none focus:border-[#64FFDA] 
                    transition-all duration-300"
                  placeholder="Email address"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="text-[#8892B0]" size={20} />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none rounded-lg relative block w-full px-10 py-3 
                    border-2 border-[#64FFDA]/20 placeholder-[#8892B0] 
                    bg-[#0A192F] text-[#CCD6F6] 
                    focus:outline-none focus:border-[#64FFDA] 
                    transition-all duration-300"
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#8892B0] hover:text-[#64FFDA]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border-l-4 border-red-500 text-red-300 p-4 rounded-lg flex items-center">
              <AlertTriangle className="mr-4 text-red-500" size={24} />
              {error}
            </div>
          )}

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 
                border border-transparent text-sm font-bold rounded-lg 
                text-[#0A192F] bg-[#64FFDA] 
                hover:bg-opacity-80 focus:outline-none focus:ring-2 
                focus:ring-offset-2 focus:ring-[#64FFDA] 
                transition-all duration-300 
                flex items-center justify-center"
            >
              <LogIn className="mr-2 group-hover:rotate-6 transition-transform" size={20} />
              Sign in
            </button>
          </div>
        </form>

        {/* Additional Links */}
        <div className="text-center mt-4">
          <a 
            href="#forgot-password" 
            className="text-sm text-[#8892B0] hover:text-[#64FFDA] transition-colors"
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login