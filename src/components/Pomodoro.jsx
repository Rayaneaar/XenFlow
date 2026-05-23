import { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const work_time = 1 * 60 * 1000;
const break_time = 25 * 60 * 1000;
export default function Pomodoro({ duration }) {
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
  return (
    <div className="w-64 h-64 mx-auto">
      <CircularProgressbarWithChildren
        value={percentage}
        strokeWidth={1}
        styles={buildStyles({
          // Customizing colors
          pathColor: "#000000",
          trailColor: "#EBEBEB",
          textColor: "#000000",
          textSize: "27px",
          strokeLinecap: "round",
          pathTransitionDuration: 0.5,
        })}
      >
        <h6 className="tracking-[0.4em]font-mono font-light text-[13px] uppercase">
          {mode == "work" ? "Deep Work" : "Break"}
        </h6>
        <span className="block text-8xl font-extralight  tracking-tighter">
          {getFormattedTime(timeLeft)}
        </span>
      </CircularProgressbarWithChildren>
      <button
        onClick={() => setIsRunning(!isRunning)}
        className="text-center mx-auto  text-white p-3 rounded-xs  hover:scale-110 transition-all duration-500 cursor-pointer flex justify-center mt-9"
      >
        {isRunning ? "Pause" : "START"}
      </button>
    </div>
  );
}
