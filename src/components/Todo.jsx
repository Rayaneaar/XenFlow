import { useState, useEffect, useRef } from "react";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewTask] = useState("");
  const [isInputOpen, setIsInputOpen] = useState(false);
  const inptRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsInputOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isInputOpen) {
      const timer = setTimeout(() => {
        inptRef.current?.focus();
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isInputOpen]);
  
  const addTask = (e) => {
    if (e) e.preventDefault();
    if (!newtask.trim()) return;
    const newTask = {
      id: Date.now(),
      text: newtask,
      complete: false
    };
    setTasks([...tasks, newTask]);
    setNewTask('');
    setIsInputOpen(false);
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, complete: !task.complete } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const completedCount = tasks.filter((t) => t.complete).length;
  const totalCount = tasks.length;

  return (
    <>
      <div className="w-80 p-6 rounded-2xl bg-slate-950/20 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col gap-4">
        <div>
          <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/50 flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-70"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
              </svg>
              Active Focus List
            </div>
            {totalCount > 0 && (
              <span className="text-[9px] font-mono bg-white/10 text-white/80 px-2 py-0.5 rounded-full tracking-normal">
                {completedCount}/{totalCount}
              </span>
            )}
          </h5>
        </div>

        {tasks.length === 0 ? (
          <p className="text-[11px] text-white/20 italic tracking-wider text-center py-4">
            Your focus list is empty
          </p>
        ) : (
          <ul className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-1">
            {tasks.map((task) => (
              <li 
                key={task.id} 
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 animate-task-slide-in"
              >
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => toggleTask(task.id)}
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      task.complete
                        ? "bg-white border-white text-slate-950 scale-100"
                        : "bg-transparent border-white/25 hover:border-white/50 scale-100 hover:scale-105"
                    }`}
                  >
                    {task.complete && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </button>
                  <span className={`text-xs transition-all duration-300 ${task.complete ? "line-through text-white/30" : "text-white/80"}`}>
                    {task.text}
                  </span>
                </div>

                <button 
                  onClick={() => deleteTask(task.id)}
                  className="text-white/30 hover:text-red-400 hover:scale-110 transition text-xs cursor-pointer px-1"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-2 flex items-center justify-between text-[10px] text-white/40 border-t border-white/5 pt-3">
          <span className="hidden md:inline font-mono">Press ⌘K to manage tasks</span>
          <button
            onClick={() => setIsInputOpen(true)}
            className="w-full md:w-auto px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/80 hover:text-white transition text-[10px] font-bold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-1.5"
          >
            <span className="md:hidden">Add New Task</span>
            <span className="hidden md:inline font-semibold">Open Input</span>
            <span className="px-1 py-0.5 rounded bg-white/15 text-[8px] font-mono font-normal">⌘K</span>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 p-4 sm:p-5 rounded-2xl bg-slate-950/40 backdrop-blur-2xl border border-white/10 shadow-2xl z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isInputOpen
            ? "-translate-y-1/2 opacity-100 scale-100 pointer-events-auto"
            : "-translate-y-[40%] opacity-0 scale-95 pointer-events-none"
        } w-[calc(100%-32px)] sm:w-[420px]`}
      >
        <form onSubmit={addTask} className="relative flex items-center">
          <input
            ref={inptRef}
            type="text"
            placeholder="Type a focus task and press Enter..."
            value={newtask}
            onChange={(e) => setNewTask(e.target.value)}
            className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-white/30 transition placeholder-white/20"
          />
          <button 
            type="submit" 
            className="absolute right-2 px-3 py-1.5 bg-white text-black text-[10px] font-bold rounded-lg hover:scale-105 transition cursor-pointer"
          >
            ADD
          </button>
        </form>
      </div>
    </>
  );
}