import React from "react";
import { CgProfile } from "react-icons/cg";

export default function Selected({ select }) {
  return (
    <div>
      {select.length === 0 ? (
        <p className="font-bold text-3xl text-center items-center">Player not available</p>
      ) : (
        
       <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        
        { select.map((item, index) => (
          <div key={index} className="max-w-xs bg-white shadow-lg m-4">
            <div className="w-full h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <CgProfile /> {item.name}
              </h2>
            </div>
          </div>
        ))}
       </div>
      )}
    </div>
  );
}