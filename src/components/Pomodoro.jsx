import { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Pomodoro({ workTimeValue, breakTimeValue }) {
  const work_time = workTimeValue * 60 * 1000;
  const break_time = breakTimeValue * 60 * 1000;
  const [mode, setMode] = useState("work");
  const [timeLeft, setTimeLeft] = useState(work_time);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId;
    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1000);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [isRunning, timeLeft]);
  useEffect(() => {
    if (timeLeft === 0) {
      if (mode === "work") {
        setMode("break");
        setTimeLeft(break_time);
      } else {
        setMode("work");
        setTimeLeft(work_time);
      }
    }
  }, [timeLeft, mode]);
  function getFormattedTime(milliseconds) {
    const total_seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(total_seconds / 60);
    const seconds = total_seconds % 60;

    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(seconds).padStart(2, "0");
    return `${paddedMinutes}:${paddedSeconds}`;
  }
  const totalDuration = mode === "work" ? work_time : break_time;
  const elapsed = totalDuration - timeLeft;
  const percentage = (elapsed / totalDuration) * 100;
  useEffect(() => {
    if (!isRunning) {
      setTimeLeft(mode === "work" ? work_time : break_time);
    }
  }, [workTimeValue, breakTimeValue, mode]);
  return (
    <div className="w-64 h-64 mx-auto ">

      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={1}
        styles={buildStyles({
          pathColor: "#7f7f7f",
          trailColor: "#EBEBEB",
          textColor: "#000000",
          textSize: "27px",
          strokeLinecap: "round",
          pathTransitionDuration: 0.5,
        })}
      >
        <h6 className="text-[11px] font-bold uppercase tracking-[0.4em]  flex items-center gap-3 ">
          {mode == "work" ? "Deep Work" : "Break"}
        </h6>
        <span className="block text-8xl font-extralight  tracking-tighter">
          {getFormattedTime(timeLeft)}
        </span>
      </CircularProgressbarWithChildren>
      <button
        onClick={() => setIsRunning(!isRunning)}
        className="text-center mx-auto text-white/90 hover:text-white px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/15 hover:border-white/30 shadow-lg hover:scale-105 transition-all duration-500 cursor-pointer flex justify-center mt-12 font-mono text-xs tracking-[0.25em] uppercase"
      >
        {isRunning ? "Pause" : "START"}
      </button>
    </div>
  );
}
