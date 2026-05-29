import { useState } from "react";
import { Wallpaper } from "lucide-react";
import { Clock } from "lucide-react";

export default function Menu({
  isOpen,
  backgrounds,
  activeId,
  onSelectBg,
  workTimeValue,
  setWorkTimeValue,
  breakTimeValue,
  setBreakTimeValue,
}) {


  return (
    <div
      className={`text-white absolute rounded-2xl bg-slate-950/35 backdrop-blur-2xl border border-white/10 shadow-2xl z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] top-20 right-4 md:right-12 p-6 md:p-12 w-[calc(100%-32px)] md:w-96 ${
        isOpen
          ? "translate-x-0 opacity-100 pointer-events-auto"
          : "translate-x-24 opacity-0 pointer-events-none"
      }`}
    >
      <div>
        <h5 className="text-[17px] font-bold uppercase tracking-[0.4em] opacity-90 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-command"
            aria-hidden="true"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
          </svg>
          Preferences
        </h5>
      </div>
      <div className="mt-16">
        <h5 className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-60 flex items-center gap-3">
          <span>
            <Wallpaper size={16} />
          </span>
          Backgrounds
        </h5>
        <div className="flex flex-col gap-2 mt-4">
          {backgrounds.map((bg) => (
            <li key={bg.id} className="list-none">
              <button
                className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 cursor-pointer text-xs font-light tracking-wider hover:scale-[1.01]
                 ${
                   activeId === bg.id
                     ? "bg-white text-slate-950 border-white font-medium shadow-lg"
                     : "bg-white/5 border-white/5 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20"
                 }`}
                onClick={() => onSelectBg(bg.id)}
              >
                <div className="flex items-center justify-between">
                  <span>{bg.name}</span>
                  {activeId === bg.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-950 animate-pulse"></span>
                  )}
                </div>
              </button>
            </li>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h5 className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-60 flex items-center gap-3">
          <span>
            <Clock size={16} />
          </span>
          Chronology
        </h5>
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h5 className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">
              Work
            </h5>
            <div className="flex items-center">
              <input
                type="number"
                name="work"
                id="work"
                className="w-16 bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/30 rounded-full px-2.5 py-1 text-white font-mono font-bold text-center focus:outline-none transition-all duration-300 text-xs"
                value={workTimeValue}
                onChange={(e) => {
                  setWorkTimeValue(Number(e.target.value));
                }}
              />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 ml-2">
                MIN
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">
              Break
            </h5>
            <div className="flex items-center">
              <input
                type="number"
                name="work"
                id="work"
                className="w-16 bg-white/5 border border-white/10 hover:border-white/20 focus:border-white/30 rounded-full px-2.5 py-1 text-white font-mono font-bold text-center focus:outline-none transition-all duration-300 text-xs"
                value={breakTimeValue}
                onChange={(e) => {
                  setBreakTimeValue(Number(e.target.value));
                }}
              />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40 ml-2">
                MIN
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
