import React from 'react';
import { Zap, Users, XCircle } from 'lucide-react';

const NoUsersAvailable = () => {
  return (
    <div className="min-h-[70vh] bg-[#0A192F] flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <div className="relative mb-8">
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-20">
            <Users className="w-32 h-32 text-[#64FFDA]" />
          </div>
        </div>
        
        <div className="bg-[#112240] rounded-2xl p-10 shadow-2xl border-2 border-[#64FFDA]/20">
          <div className="flex justify-center mb-6">
            <XCircle className="w-16 h-16 text-[#64FFDA]" />
          </div>
          
          <h2 className="text-4xl font-bold text-[#CCD6F6] mb-4">
            No Users Available
          </h2>
          
          <p className="text-[#8892B0] text-lg mb-6">
            It seems like there are currently no users to explore in our cosmic network. 
            Check back later or try adjusting your search filters.
          </p>
          
          <div className="flex justify-center space-x-4">
            <div className="bg-[#0A192F]/50 rounded-full p-3">
              <Zap className="w-8 h-8 text-[#64FFDA] animate-pulse" />
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-[#8892B0] italic">
          Your cosmic connection is just around the corner
        </div>
      </div>
    </div>
  );
};

export default NoUsersAvailable;