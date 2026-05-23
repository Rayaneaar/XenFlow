import Navbar from "./components/Navbar";
import "./App.css";
import Pomodoro from "./components/Pomodoro";
function App() {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0 -z-36 w-full h-full">
        <video
          className="w-full h-full object-cover"
          src="/backgroundvideo/wavygrass.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />

        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[3px]"></div>
      </div>
      <nav className=" text-white">
        <Navbar />
      </nav>

      <main className=" flex items-center mix-blend-exclusion text-white justify-center -translate-y-36">
        <Pomodoro />
      </main>

      <footer className="text-center p-6 text-xs text-white/40">
        XenFlow © 2026
      </footer>
    </div>
  );
}

export default App;
