import React from 'react'
import { Zap, X, Heart } from 'lucide-react'
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

const UserCard = ({ user }) => {
    const { _id ,firstName, lastName, photoUrl, age, about, gender } = user;
    const dispatch = useDispatch();
    console.log(_id);

    const handleSendRequest = async (status, userId) => {
        try {
            const res = await axios.post(
            BASE_URL + "/request/send/" + status + "/" + userId,
            {},
            { withCredentials: true }
          );
          dispatch(removeUserFromFeed(userId));
        } catch (err) {
            console.log(err);
        }
      };
    
    return (
        <div className="min-h-screen bg-[#0A192F] flex items-center justify-center p-4">
            <div className="bg-[#112240] rounded-2xl w-full max-w-md overflow-hidden shadow-2xl border-2 border-[#64FFDA]/20 transform transition-all hover:scale-105">
                <div className="relative">
                    {photoUrl ? (
                        <div className="h-72 overflow-hidden">
                            <img
                                src={photoUrl}
                                alt="User Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ) : (
                        <div className="h-72 bg-[#64FFDA]/10 flex items-center justify-center">
                            <Zap className="w-24 h-24 text-[#64FFDA] opacity-50" />
                        </div>
                    )}
                    <div className="absolute top-4 right-4 bg-[#0A192F]/50 rounded-full p-2">
                        <Zap className="w-8 h-8 text-[#64FFDA]" />
                    </div>
                </div>
                
                <div className="p-8">
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-[#CCD6F6] mb-2">
                            {firstName} {lastName}
                        </h2>
                        {age && gender && (
                            <span className="text-sm text-[#64FFDA] bg-[#64FFDA]/10 px-3 py-1 rounded-full">
                                {age}, {gender}
                            </span>
                        )}
                    </div>
                    
                    {about && (
                        <p className="text-[#8892B0] text-center italic mb-8 min-h-[3rem]">
                            "{about}"
                        </p>
                    )}
                    
                    <div className="flex justify-center space-x-6">
                        <button className="bg-red-500/20 text-red-300 hover:bg-red-500/40 p-4 rounded-full transition-all group" onClick={() => handleSendRequest("ignored", _id)}>
                            <X className="w-8 h-8 text-red-300 group-hover:rotate-12 transition-transform" />
                        </button>
                        <button className="bg-green-500/20 text-green-300 hover:bg-green-500/40 p-4 rounded-full transition-all group" onClick={() => handleSendRequest("interested", _id)} >
                            <Heart className="w-8 h-8 text-green-300 group-hover:scale-110 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserCard;