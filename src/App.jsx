import Navbar from "./components/Navbar";
import "./App.css";
import Pomodoro from "./components/Pomodoro";
import Menu from "./components/MenuConfig";
import { useState, useEffect, useRef } from "react";
import Todo from "./components/Todo";
import SplashLoader from "./components/SplashLoader";

const BACKGROUNDS = [
  { id: "tgmzmXJi-GM", name: "Wavy grass" },
  { id: "2wIACHP04qQ", name: "Japanese Autumn Leaves" },
  { id: "DbuebKNKQsQ", name: "peaceful place Lofi" },
  { id: "38pNIsRE0K4", name: "Dark Fantasy" }
];

function App() {
  const [IsMenuOpened, setIsMenuOpened] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpened(!IsMenuOpened);
  };
  const [workTimeValue , setWorkTimeValue] = useState(25);
  const [breakTimeValue , setBreakTimeValue] = useState(5);
  const [activeVideoId, setActiveVideoId] = useState(BACKGROUNDS[0].id);

  // 1. Splash Screen States
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5.0 seconds allows the majestic intro to fully complete
    return () => clearTimeout(timer);
  }, []);

  // 2. Detect if the user is offline or has lost internet connectivity
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  // 2. Playback control for the local offline fallback video (Brave/Chrome safe)
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isOffline) return;

    video.defaultMuted = true;
    video.muted = true;
    video.play().catch(() => {});

    const handleGesture = () => {
      if (video && video.paused) {
        video.play().catch(() => {});
      }
    };

    window.addEventListener("click", handleGesture);
    window.addEventListener("keydown", handleGesture);
    window.addEventListener("touchstart", handleGesture);

    return () => {
      window.removeEventListener("click", handleGesture);
      window.removeEventListener("keydown", handleGesture);
      window.removeEventListener("touchstart", handleGesture);
    };
  }, [isOffline]);

  return (
    // 📱 Changed overflow-hidden to overflow-y-auto to allow scrolling on small mobile screens
    <div className="relative min-h-screen overflow-y-auto md:overflow-hidden flex flex-col justify-between">
      
      {/* 🌟 1. Modular Startup Splash Loader (Cinematic Aurora & Anime Character) */}
      <SplashLoader isLoading={isLoading} />

      {/* 🌌 2. BACKGROUND LAYER */}
      <div className="absolute inset-0 -z-40 w-full h-full overflow-hidden bg-slate-950">
        {isOffline ? (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src="/wavygrass.mp4"
            loop
            muted
            playsInline
            preload="auto"
          />
        ) : (
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none scale-[2.2] md:scale-[1.6]"
            src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1&mute=1&controls=0&disablekb=1&playsinline=1&loop=1&playlist=${activeVideoId}&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0`}
            frameBorder="0"
            allow="autoplay; encrypted-media"
          ></iframe>
        )}

        {/* Soft atmospheric overlay */}
        <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[2px] z-10"></div>

        {/* 🌟 Ambient Drifting Particles (Ghibli-style dust motes / fireflies) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute left-[10%] w-1.5 h-1.5 rounded-full bg-white/20 blur-[1px] animate-particle-1"></div>
          <div className="absolute left-[30%] w-2 h-2 rounded-full bg-white/10 blur-[1.5px] animate-particle-2"></div>
          <div className="absolute left-[55%] w-1 h-1 rounded-full bg-white/35 blur-[0.5px] animate-particle-3"></div>
          <div className="absolute left-[80%] w-2 h-2 rounded-full bg-white/10 blur-[1.5px] animate-particle-4"></div>
          <div className="absolute left-[22%] w-1 h-1 rounded-full bg-white/20 blur-[0.5px] animate-particle-2" style={{ animationDelay: "12s" }}></div>
          <div className="absolute left-[68%] w-1.5 h-1.5 rounded-full bg-white/15 blur-[1px] animate-particle-3" style={{ animationDelay: "18s" }}></div>
        </div>
      </div>

      {/* 💻 3. MAIN APP CONTENT (Soft reveal zoom/fade animation upon loading complete) */}
      <div 
        className={`flex-grow flex flex-col justify-between transition-all duration-1000 delay-300 ${
          isLoading ? 'opacity-0 scale-[0.99] translate-y-1' : 'opacity-100 scale-100 translate-y-0'
        }`}
      >
        <nav className="text-white relative z-10">
          <Navbar onMenuClick={toggleMenu} />
        </nav>

        {/* 🚀 RESPONSIVE CONTAINER: Sits centered below the clock on mobile, floats left on desktop */}
        <aside className="md:absolute md:left-12 md:top-36 relative mx-auto mt-6 md:mt-0 z-20 text-white flex justify-center w-full md:w-auto px-4 md:px-0">
          <Todo />
        </aside>

        <aside >
          <Menu
            isOpen={IsMenuOpened}
            backgrounds={BACKGROUNDS}
            activeId={activeVideoId}
            onSelectBg={(id) => setActiveVideoId(id)}
            workTimeValue={workTimeValue}
            setWorkTimeValue={setWorkTimeValue}
            breakTimeValue={breakTimeValue}
            setBreakTimeValue={setBreakTimeValue}
          />
        </aside>

        {/* Adjusted vertical position of clock slightly on mobile to avoid squishing */}
        <main className="flex items-center justify-center -translate-y-16 md:-translate-y-46 text-white relative z-10 my-12 md:my-0">
          <Pomodoro
            workTimeValue={workTimeValue}
            breakTimeValue={breakTimeValue}
          />
        </main>

        <footer className="text-center p-6 text-xs text-white/40 relative z-10">
          XenFlow © 2026
        </footer>
      </div>    </div>
  );
}

export default App;