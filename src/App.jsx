import Navbar from "./components/Navbar";
import "./App.css";
import Pomodoro from "./components/Pomodoro";
import Menu from "./components/MenuConfig";
import { useState } from "react";

function App() {
  const [IsMenuOpened, setIsMenuOpened] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpened(!IsMenuOpened);
  };
const BACKGROUNDS = [
  { name: "Wavy grass", id: "tgmzmXJi-GM" },

  { name: "Aesthetic Anime", id: "WxQIUXnokAo" },
  { name: "Minecraft", id: "rmZAo-D_m3Q" },
  { name: "Dark Fantasy", id: "J0shA9J-4Nc" } 
];
const [activeVideoId, setActiveVideoId] = useState(BACKGROUNDS[0].id);
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-between">
      

      <div className="absolute inset-0 -z-40 w-full h-full overflow-hidden">

        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none scale-[1.6]"
         src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&mute=1&controls=0&disablekb=1&playsinline=1&loop=1&playlist=${activeVideoId}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
        ></iframe>


        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[5px]"></div>
      </div>

      <nav className="text-white relative z-10">
        <Navbar onMenuClick={toggleMenu} />
      </nav>
      
      <aside className="">
        <Menu isOpen={IsMenuOpened} 
          backgrounds={BACKGROUNDS} 
          activeId={activeVideoId}
          onSelectBg={(id) => setActiveVideoId(id)} 
        />
      </aside>

      <main className="flex items-center justify-center -translate-y-46 text-white relative z-10">
        <Pomodoro />
      </main>

      <footer className="text-center p-6 text-xs text-white/40 relative z-10">
        XenFlow © 2026
      </footer>
    </div>
  );
}

export default App;