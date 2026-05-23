import { Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="m-9 flex justify-center">
      <div>
        <span className="bg-white">..</span>
        <h4 className="inline "> Xen<span>Flow</span></h4>
      </div>  
      <div>
        <button className='cursor-pointer hover:scale-120 transition duration-500  ml-9'>
          <Settings />
        </button>
      </div>
    </div>
  )
}
