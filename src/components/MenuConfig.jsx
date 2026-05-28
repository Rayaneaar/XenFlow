import { useState } from "react";
import { Wallpaper } from "lucide-react";
import { Clock } from "lucide-react";

export default function Menu({ isOpen, backgrounds, activeId, onSelectBg }) {
  return (
    <div
      className={`text-white top-14 right-12 absolute rounded-2xl bg-slate-950/30 backdrop-blur-md border border-white/10 shadow-2xl p-20 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen
          ? "translate-x-0 opacity-100 pointer-events-auto"
          : "translate-x-24 opacity-0 pointer-events-none"
      }`}
    >
      <div>
        <h5 className="text-[11px] font-bold uppercase tracking-[0.4em] opacity-40 flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
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
        <h5 className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-20 flex items-center gap-3">
          <span>
            <Wallpaper size={16} />
          </span>
          Backgrounds
        </h5>
        <div className="flex flex-col gap-3 mt-4 ">
          {backgrounds.map((bg) => (
            <li key={bg.id}>
              <button
                className={`border-1 border-white opacity-80 p-4 mt-2 rounded-2xl px-18 hover:opacity-100 cursor-pointer hover:scale-105 transition-all duration-500
                 ${
                   activeId === bg.id
                     ? "bg-white/20 text-white font-medium"
                     : "hover:bg-white/10 text-gray-400"
                 }`}
                onClick={() => onSelectBg(bg.id)}
              >
                {bg.name}
              </button>
            </li>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <h5 className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-20 flex items-center gap-3">
          <span>
            <Clock size={16} />
          </span>
          Chronology
        </h5>
        <div className="mt-10">
          <div className="flex justify-center">
            <h5 className="text-[9px] font-bold uppercase tracking-[0.4em]  flex items-center gap-3">
              Work
            </h5>
            <input
              type="number"
              name="work"
              id="work"
              className="border-1 rounded-3xl mx-4 text-white font-extrabold text-center "
            />
            <span className="text-[9px] font-bold uppercase tracking-[0.4em]  flex items-center gap-3">
              MIN
            </span>
          </div>
          <div className="flex justify-center mt-5">
            <h5 className="text-[9px] font-bold uppercase tracking-[0.4em]  flex items-center gap-3">
              Break
            </h5>
            <input
              type="number"
              name="work"
              id="work"
              className="border-1 rounded-3xl mx-4 text-white font-extrabold text-center "
            />
            <span className="text-[9px] font-bold uppercase tracking-[0.4em]  flex items-center gap-3">
              MIN
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
