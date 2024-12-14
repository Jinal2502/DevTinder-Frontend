import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connections'

const Connections = () => {

    const connections = useSelector(store => store.connections);
    const dispatch = useDispatch();

     const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + "/user/connections", {withCredentials:true});
            dispatch(addConnections(res.data.data))
            
            
        } catch (err) {
            console.error(err);

            
        }




     };

     useEffect(() => {
        fetchConnections();

     }, [])

    if(!connections) return;
    if(connections.length === 0) return <h1>No Connections Found</h1>
  return (

    <div className='flex flex-col justify-center my-10 '>
        <h1 className='text-bold text-2xl my-4 '>Connnections</h1>

        {connections.map((connection) => {
            const {firstName, lastName, photoUrl, age, gender, about} = connection;

            return (
            <div className='flex justify-center  p-4 rounded-lg m-4 bg-base-300 w-1/2 mx-auto'>
                <div><img className='w-20 h-20 rounded-full ' src= {photoUrl} alt="User Photo" /></div>
                <div className='text-left mx-4'> 
                    <h2 className='font-bold text-xl'>{firstName + " " +lastName}</h2>
                    {age && gender && <p> {age + " " + gender}</p>} 
                    <p>{about}</p>
                    
                </div>

                
                
                
            </div>
        )})}




    </div>
  )

}

export default Connections