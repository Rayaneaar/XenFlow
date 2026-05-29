import { Settings } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({onMenuClick}) {
  return (
    <div className="m-9 flex justify-center">
      <div>
        <span className="bg-white">..</span>
        <h4 className="inline "> Xen<span>Flow</span></h4>
      </div>  
      <div>
        <button className='group cursor-pointer hover:scale-110 transition duration-500 ml-9' onClick={onMenuClick}>
          <Settings className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500" />
        </button>
      </div>
    </div>
  )
}
