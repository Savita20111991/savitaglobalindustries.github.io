
import React from 'react';

const Logo: React.FC<{ light?: boolean }> = ({ light }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      <div className="relative w-10 h-10 logo-3d">
        {/* Simplified 3D Gear/Global icon */}
        <div className={`absolute inset-0 border-4 rounded-lg transform rotate-45 ${light ? 'border-white' : 'border-blue-900'}`}></div>
        <div className={`absolute inset-0 border-4 rounded-lg transform -rotate-45 ${light ? 'border-blue-400' : 'border-blue-600'} opacity-70`}></div>
        <div className={`absolute inset-0 flex items-center justify-center font-bold ${light ? 'text-white' : 'text-blue-900'}`}>S</div>
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`font-bold text-lg md:text-xl tracking-tight ${light ? 'text-white' : 'text-blue-900'}`}>
          SAVITA GLOBAL
        </span>
        <span className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${light ? 'text-blue-200' : 'text-blue-600'}`}>
          Group of Industries
        </span>
      </div>
    </div>
  );
};

export default Logo;
