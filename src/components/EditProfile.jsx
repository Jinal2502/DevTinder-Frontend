import React, { useState } from 'react'
import UserCard from './UserCard';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { Save, Edit, AlertTriangle } from 'lucide-react'

const EditProfile = ({user}) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [about, setAbout] = useState(user.about);
    const [error, setError] = useState("")
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);

    const saveProfile = async() => {
        setError("");
        try {
            const res = await axios.patch(BASE_URL + "/profile/edit",
                {firstName, lastName, photoUrl, age, gender, about},
                {withCredentials:true}
            );
            dispatch(addUser(res?.data.data));
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            }, 4000);
        } catch (err) {
            setError(err.response.data)
        }
    }

    const renderInput = (label, value, onChange, type = "text") => (
        <div className="mb-6">
            <label className="block text-[#8892B0] text-sm font-bold mb-2">
                {label}
            </label>
            <input 
                type={type}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3 bg-[#112240] border-2 border-[#64FFDA]/20 rounded-lg text-[#CCD6F6] 
                focus:outline-none focus:border-[#64FFDA] transition-all"
            />
        </div>
    );

    return (
        <div className="min-h-screen bg-[#0A192F] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
                {/* Edit Profile Section */}
                <div className="w-full lg:w-1/2 bg-[#112240] rounded-2xl p-8 shadow-2xl border-2 border-[#64FFDA]/20">
                    <div className="flex items-center mb-8">
                        <Edit className="w-8 h-8 mr-4 text-[#64FFDA]" />
                        <h2 className="text-3xl font-bold text-[#CCD6F6]">Edit Profile</h2>
                    </div>

                    <form>
                        {renderInput("First Name", firstName, (e) => setFirstName(e.target.value))}
                        {renderInput("Last Name", lastName, (e) => setLastName(e.target.value))}
                        {renderInput("Photo URL", photoUrl, (e) => setPhotoUrl(e.target.value))}
                        {renderInput("Age", age, (e) => setAge(e.target.value), "number")}
                        {renderInput("Gender", gender, (e) => setGender(e.target.value))}
                        
                        <div className="mb-6">
                            <label className="block text-[#8892B0] text-sm font-bold mb-2">
                                About
                            </label>
                            <textarea 
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                                className="w-full px-4 py-3 bg-[#112240] border-2 border-[#64FFDA]/20 rounded-lg text-[#CCD6F6] 
                                focus:outline-none focus:border-[#64FFDA] transition-all h-32"
                            />
                        </div>

                        {error && (
                            <div className="bg-red-500/10 border-l-4 border-red-500 text-red-300 p-4 mb-6 flex items-center">
                                <AlertTriangle className="mr-4 text-red-500" />
                                {error}
                            </div>
                        )}

                        <button 
                            onClick={saveProfile}
                            className="w-full bg-[#64FFDA] text-[#0A192F] px-6 py-3 rounded-lg font-bold 
                            hover:bg-opacity-80 transition-all flex items-center justify-center group"
                        >
                            <Save className="mr-2 group-hover:rotate-6 transition-transform" />
                            Save Profile
                        </button>
                    </form>
                </div>

                {/* Preview Section */}
                <div className="w-full lg:w-1/2">
                    <UserCard user={{firstName, lastName, photoUrl, age, gender, about}} />
                </div>
            </div>

            {/* Toast Notification */}
            {showToast && (
                <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
                    <div className="bg-green-500/20 border-l-4 border-green-500 text-green-300 px-6 py-4 rounded-lg flex items-center shadow-2xl">
                        <Save className="mr-4 text-green-500" />
                        Changes Saved Successfully
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditProfile;