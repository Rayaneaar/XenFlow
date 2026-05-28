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
        <button className='cursor-pointer hover:scale-120 transition duration-500  ml-9' onClick={onMenuClick}>
          <Settings  />
        </button>
      </div>
    </div>
  )
}
