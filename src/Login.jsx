import React, { useState } from 'react'

    

const Login = () => {

  const [emailId, setEmailId] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleLogin = async () => {
        
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


    </div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Log In</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login