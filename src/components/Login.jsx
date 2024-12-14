import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router';
import { BASE_URL } from '../utils/constants';

    

const Login = () => {

  const [emailId, setEmailId] = useState("jilu.jr11@gmail.com");
  const [password, setPassword] = useState("Jinal25022006#");
  const [error, setError ] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleLogin = async () => {


        
         try {
          const res = await axios.post( BASE_URL  +  "/login", {
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
    <div className='flex justify-center my-20'>
      <div className="card bg-base-300 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title justify-center">Login!</h2>
    <div>
    <label className="form-control w-full max-w-xs">
   <div className="label">
    <span className="label-text">EMAIL ID?</span>
   
    </div>
    <input 
    type="text"
    value={emailId}
    placeholder="Example@gmail.com" 
    className="input input-bordered w-full max-w-xs"
    onChange={(e) => setEmailId(e.target.value)}
    
     />
    <div className="label">
    
   
  </div>
  </label>


    </div>
    <div>
    <label className="form-control w-full max-w-xs">
   <div className="label">
    <span className="label-text">PASSWORD?</span>
   
    </div>
    <input 
    type="text" 
    value={password}
    placeholder="********" 
    className="input input-bordered w-full max-w-xs"
    onChange={(e) => setPassword(e.target.value)} 
    />
    <div className="label">
   
  </div>
  </label>

    <p className='text-red-700'> {error}</p>
    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={handleLogin} >Log In</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login;