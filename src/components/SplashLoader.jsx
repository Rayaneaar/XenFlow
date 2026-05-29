import { useEffect, useState } from "react";

export default function SplashLoader({ isLoading }) {
  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-tr from-[#0a0b0d] via-[#111215] to-[#16171c] bg-[#0a0b0d] animate-slow-bg transition-opacity duration-1000 ease-in-out ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
        <div className="w-[500px] h-[500px] rounded-full bg-sky-500/10 blur-[120px] absolute animate-pulse"></div>
        <div className="w-[350px] h-[350px] rounded-full bg-blue-600/5 blur-[100px] absolute animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        <div className="absolute w-36 h-28 rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] bg-sky-400/20 blur-md -translate-x-16 -translate-y-8 animate-float" style={{ animationDuration: "8s" }}></div>
        <div className="absolute w-24 h-24 rounded-[50%_50%_30%_70%_/_50%_60%_40%_60%] bg-sky-400/20 blur-md translate-x-4 translate-y-12 animate-float" style={{ animationDuration: "10s", animationDelay: "1s" }}></div>
        <div className="absolute w-12 h-12 rounded-full bg-sky-400/30 blur-sm -translate-x-6 -translate-y-24 animate-float" style={{ animationDuration: "7s", animationDelay: "2s" }}></div>
        <div className="absolute w-16 h-16 rounded-[45%_55%_50%_50%_/_50%_45%_55%_50%] bg-sky-400/25 blur-md translate-x-16 -translate-y-16 animate-float" style={{ animationDuration: "9s", animationDelay: "1.5s" }}></div>
        <div className="absolute w-8 h-8 rounded-full bg-sky-400/30 blur-sm translate-x-0 -translate-y-10 animate-float" style={{ animationDuration: "6s", animationDelay: "0.5s" }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12">
        <div className="relative w-28 h-28 rounded-full border border-white/5 shadow-[0_0_30px_rgba(56,189,248,0.05)] flex items-center justify-center select-none bg-black/10 backdrop-blur-sm">
          <div className="w-12 h-12 bg-slate-950 rounded-full relative animate-float flex items-center justify-center shadow-2xl border border-white/5 z-10">
            <div className="absolute top-3.5 left-2.5 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-black rounded-full -translate-x-[0.5px] -translate-y-[0.5px]"></div>
            </div>
            <div className="absolute top-3.5 right-2.5 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-black rounded-full -translate-x-[0.5px] -translate-y-[0.5px]"></div>
            </div>
          </div>

          <div className="absolute inset-0 w-full h-full rounded-full animate-orbit pointer-events-none z-20">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-sky-300 to-sky-500 shadow-[0_0_12px_#38bdf8]"></span>
          </div>

          <div className="absolute inset-0 rounded-full border border-sky-500/10 animate-ping opacity-25"></div>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white tracking-[0.4em] uppercase animate-spotlight-reveal select-none">
            Xen<span className="bg-gradient-to-r from-sky-400 via-sky-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]">Flow</span>
          </h1>
          
          <div className="w-20 h-[1.5px] bg-white/10 mt-5 overflow-hidden relative mx-auto rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 shadow-[0_0_8px_rgba(56,189,248,0.7)] origin-left animate-loading-bar-slow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
