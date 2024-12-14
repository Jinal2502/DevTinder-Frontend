
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connections'
import { Network, UserPlus, MessageCircle, Globe } from 'lucide-react'

const Connections = () => {
    const connections = useSelector(store => store.connections);
    const dispatch = useDispatch();
    const [activeConnection, setActiveConnection] = useState(null);

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

    if(!connections) return null;
    if(connections.length === 0) return (
        <div className="min-h-screen bg-[#0A192F] flex items-center justify-center p-4">
            <div className="text-center bg-[#112240] rounded-2xl p-12 border-2 border-[#64FFDA] shadow-2xl">
                <Network className="mx-auto mb-6 text-[#64FFDA] w-24 h-24" strokeWidth={1} />
                <h1 className="text-4xl font-bold text-[#CCD6F6] mb-4">No Connections Yet</h1>
                <p className="text-[#8892B0] mb-6">Expand your network and start connecting!</p>
                <button className="bg-[#64FFDA] text-[#0A192F] px-6 py-3 rounded-lg font-bold hover:bg-opacity-80 transition-all flex items-center mx-auto">
                    <UserPlus className="mr-2" /> Find Connections
                </button>
            </div>
        </div>
    )

    return (
        <div className="min-h-screen bg-[#0A192F] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold text-center text-[#CCD6F6] mb-16 flex items-center justify-center">
                    <Network className="mr-4 text-[#64FFDA]" /> Your Connections
                </h1>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {connections.map((connection, index) => {
                        const {firstName, lastName, photoUrl, age, gender, about} = connection;

                        return (
                            <div 
                                key={index} 
                                className={`relative bg-[#112240] rounded-2xl overflow-hidden 
                                    transform transition-all duration-300 
                                    ${activeConnection === index 
                                        ? 'scale-105 shadow-2xl border-2 border-[#64FFDA]' 
                                        : 'hover:scale-105 hover:shadow-xl'
                                    }`}
                                onMouseEnter={() => setActiveConnection(index)}
                                onMouseLeave={() => setActiveConnection(null)}
                            >
                                <div className="absolute top-4 right-4 z-10">
                                    <Globe className="text-[#64FFDA] w-8 h-8 opacity-50" />
                                </div>
                                <div className="p-8 relative z-20">
                                    <div className="flex flex-col items-center mb-6">
                                        {photoUrl ? (
                                            <div className="w-32 h-32 rounded-full border-4 border-[#64FFDA] overflow-hidden mb-4">
                                                <img 
                                                    className="w-full h-full object-cover" 
                                                    src={photoUrl} 
                                                    alt={`${firstName} ${lastName}`} 
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-32 h-32 bg-[#64FFDA]/20 rounded-full flex items-center justify-center mb-4">
                                                <Network className="w-16 h-16 text-[#64FFDA] opacity-50" />
                                            </div>
                                        )}
                                        <h2 className="text-2xl font-bold text-[#CCD6F6] mb-2">
                                            {firstName} {lastName}
                                        </h2>
                                        {age && gender && (
                                            <span className="text-sm text-[#64FFDA] bg-[#64FFDA]/10 px-3 py-1 rounded-full">
                                                {age}, {gender}
                                            </span>
                                        )}
                                    </div>
                                    
                                    {about && (
                                        <p className="text-[#8892B0] text-center italic mb-6 min-h-[3rem]">
                                            "{about}"
                                        </p>
                                    )}
                                    
                                    <div className="flex justify-center">
                                        <button className="bg-[#64FFDA] text-[#0A192F] px-6 py-3 rounded-lg font-bold 
                                            hover:bg-opacity-80 transition-all flex items-center group">
                                            <MessageCircle className="mr-2 group-hover:rotate-6 transition-transform" />
                                            Connected
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Connections