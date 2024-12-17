// import { useState } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";
// import { useNavigate } from "react-router-dom";
// import { BASE_URL } from "../utils/constants";

// const Login = () => {
//   const [emailId, setEmailId] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [isLoginForm, setIsLoginForm] = useState(false);
//   const [error, setError] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post(
//         BASE_URL + "/login",
//         {
//           emailId,
//           password,
//         },
//         { withCredentials: true }
//       );
//       dispatch(addUser(res.data));
//       return navigate("/");
//     } catch (err) {
//       setError(err?.response?.data || "Something went wrong");
//     }
//   };

//   const handleSignUp = async () => {
//     try {
//       const res = await axios.post(
//         BASE_URL + "/signup",
//         { firstName, lastName, emailId, password },
//         { withCredentials: true }
//       );
//       dispatch(addUser(res.data.data));
//       return navigate("/profile");
//     } catch (err) {
//       setError(err?.response?.data || "Something went wrong");
//     }
//   };

//   return (
//     <div className="flex justify-center my-10">
//       <div className="card bg-base-300 w-96 shadow-xl">
//         <div className="card-body">
//           <h2 className="card-title justify-center">
//             {isLoginForm ? "Login" : "Sign Up"}
//           </h2>
//           <div>
//             {!isLoginForm && (
//               <>
//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">First Name</span>
//                   </div>
//                   <input
//                     type="text"
//                     value={firstName}
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={(e) => setFirstName(e.target.value)}
//                   />
//                 </label>
//                 <label className="form-control w-full max-w-xs my-2">
//                   <div className="label">
//                     <span className="label-text">Last Name</span>
//                   </div>
//                   <input
//                     type="text"
//                     value={lastName}
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={(e) => setLastName(e.target.value)}
//                   />
//                 </label>
//               </>
//             )}
//             <label className="form-control w-full max-w-xs my-2">
//               <div className="label">
//                 <span className="label-text">Email ID:</span>
//               </div>
//               <input
//                 type="text"
//                 value={emailId}
//                 className="input input-bordered w-full max-w-xs"
//                 onChange={(e) => setEmailId(e.target.value)}
//               />
//             </label>
//             <label className="form-control w-full max-w-xs my-2">
//               <div className="label">
//                 <span className="label-text">Password</span>
//               </div>
//               <input
//                 type="password"
//                 value={password}
//                 className="input input-bordered w-full max-w-xs"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </label>
//           </div>
//           <p className="text-red-500">{error}</p>
//           <div className="card-actions justify-center m-2">
//             <button
//               className="btn btn-primary"
//               onClick={isLoginForm ? handleLogin : handleSignUp}
//             >
//               {isLoginForm ? "Login" : "Sign Up"}
//             </button>
//           </div>

//           <p
//             className="m-auto cursor-pointer py-2"
//             onClick={() => setIsLoginForm((value) => !value)}
//           >
//             {isLoginForm
//               ? "New User? Signup Here"
//               : "Existing User? Login Here"}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Login;


import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { Zap } from 'lucide-react';

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A192F] flex items-center justify-center p-4">
      <div className="bg-[#112240] rounded-2xl w-full max-w-md overflow-hidden shadow-2xl border-2 border-[#64FFDA]/20 transform transition-all hover:scale-105">
        <div className="relative p-8">
          <div className="absolute top-4 right-4">
            <Zap className="w-8 h-8 text-[#64FFDA]" />
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#CCD6F6] mb-2">
              {isLoginForm ? "Welcome Back" : "Create Your Account"}
            </h2>
            <p className="text-[#8892B0]">
              {isLoginForm 
                ? "Log in to continue your journey" 
                : "Join our stellar community"}
            </p>
          </div>

          <form className="space-y-6">
            {!isLoginForm && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    value={firstName}
                    placeholder="First Name"
                    className="w-full bg-[#0A192F]/50 text-[#CCD6F6] border border-[#64FFDA]/20 rounded-md px-3 py-2 focus:outline-none focus:border-[#64FFDA] transition-all"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={lastName}
                    placeholder="Last Name"
                    className="w-full bg-[#0A192F]/50 text-[#CCD6F6] border border-[#64FFDA]/20 rounded-md px-3 py-2 focus:outline-none focus:border-[#64FFDA] transition-all"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div>
              <input
                type="email"
                value={emailId}
                placeholder="Email Address"
                className="w-full bg-[#0A192F]/50 text-[#CCD6F6] border border-[#64FFDA]/20 rounded-md px-3 py-2 focus:outline-none focus:border-[#64FFDA] transition-all"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>

            <div>
              <input
                type="password"
                value={password}
                placeholder="Password"
                className="w-full bg-[#0A192F]/50 text-[#CCD6F6] border border-[#64FFDA]/20 rounded-md px-3 py-2 focus:outline-none focus:border-[#64FFDA] transition-all"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <div className="text-center">
                <p className="text-red-500 text-sm">{error}</p>
              </div>
            )}

            <div>
              <button
                type="button"
                className="w-full bg-[#64FFDA]/10 text-[#64FFDA] hover:bg-[#64FFDA]/20 rounded-md px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={isLoginForm ? handleLogin : handleSignUp}
              >
                {isLoginForm ? "Sign In" : "Create Account"}
              </button>
            </div>

            <div className="text-center">
              <p 
                className="text-[#8892B0] hover:text-[#64FFDA] cursor-pointer transition-colors duration-300"
                onClick={() => setIsLoginForm((value) => !value)}
              >
                {isLoginForm
                  ? "New to DevTinder? Create an Account"
                  : "Already have an account? Log In"}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;