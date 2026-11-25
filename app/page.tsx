"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type Filter = "all" | "active" | "done";
type Task = { id: string; title: string; done: boolean };

const starterTasks: Task[] = [
  { id: "1", title: "Plan this week's top priority", done: false },
  { id: "2", title: "Review project notes", done: false },
  { id: "3", title: "Take a proper break", done: true },
];

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(starterTasks);
  const [draft, setDraft] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedTasks = window.localStorage.getItem("focus-list-tasks");
    if (savedTasks) {
      try { setTasks(JSON.parse(savedTasks) as Task[]); }
      catch { window.localStorage.removeItem("focus-list-tasks"); }
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) window.localStorage.setItem("focus-list-tasks", JSON.stringify(tasks));
  }, [ready, tasks]);

  const visibleTasks = useMemo(
    () => tasks.filter((task) => filter === "all" || (filter === "done" ? task.done : !task.done)),
    [filter, tasks],
  );
  const remaining = tasks.filter((task) => !task.done).length;

  function addTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const title = draft.trim();
    if (!title) return;
    setTasks((current) => [{ id: crypto.randomUUID(), title, done: false }, ...current]);
    setDraft("");
  }

  function clearCompleted() { setTasks((current) => current.filter((task) => !task.done)); }

  return (
    <main className="min-h-screen bg-[#f7f8fc] px-5 py-12 text-slate-900 sm:px-8">
      <section className="mx-auto max-w-2xl">
        <div className="mb-9">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Focus List</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Make room for what matters.</h1>
          <p className="mt-3 text-lg text-slate-600">A quiet place for today&apos;s tasks. Everything stays in your browser.</p>
        </div>
        <div className="overflow-hidden rounded-3xl bg-white shadow-[0_20px_70px_-25px_rgba(15,23,42,0.25)]">
          <form onSubmit={addTask} className="flex gap-3 border-b border-slate-100 p-4 sm:p-5">
            <label className="sr-only" htmlFor="task">Add a task</label>
            <input id="task" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="What needs your attention?" className="min-w-0 flex-1 rounded-xl bg-slate-50 px-4 py-3 outline-none ring-indigo-500 transition focus:ring-2" />
            <button className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add task</button>
          </form>
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 pt-5">
            <p className="text-sm font-medium text-slate-500">{remaining === 1 ? "1 task left" : `${remaining} tasks left`}</p>
            <div className="flex rounded-lg bg-slate-100 p-1" aria-label="Filter tasks">
              {(["all", "active", "done"] as Filter[]).map((name) => <button key={name} onClick={() => setFilter(name)} className={`rounded-md px-3 py-1.5 text-sm font-medium capitalize transition ${filter === name ? "bg-white text-indigo-700 shadow-sm" : "text-slate-500 hover:text-slate-800"}`}>{name}</button>)}
            </div>
          </div>
          <ul className="divide-y divide-slate-100 px-5 py-3">
            {visibleTasks.map((task) => (
              <li key={task.id} className="group flex items-center gap-3 py-4">
                <input aria-label={`Mark ${task.title} as complete`} type="checkbox" checked={task.done} onChange={() => setTasks((current) => current.map((item) => item.id === task.id ? { ...item, done: !item.done } : item))} className="h-5 w-5 cursor-pointer rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                <span className={`flex-1 text-base ${task.done ? "text-slate-400 line-through" : "text-slate-800"}`}>{task.title}</span>
                <button aria-label={`Delete ${task.title}`} onClick={() => setTasks((current) => current.filter((item) => item.id !== task.id))} className="rounded-md px-2 py-1 text-slate-300 opacity-0 transition hover:bg-rose-50 hover:text-rose-600 focus:opacity-100 group-hover:opacity-100">×</button>
              </li>
            ))}
            {visibleTasks.length === 0 && <li className="py-12 text-center text-slate-500">Nothing here yet. Enjoy the clear space.</li>}
          </ul>
          {tasks.some((task) => task.done) && <div className="border-t border-slate-100 px-5 py-4 text-right"><button onClick={clearCompleted} className="text-sm font-medium text-slate-500 underline-offset-4 hover:text-indigo-700 hover:underline">Clear completed</button></div>}
        </div>
      </section>
    </main>
  );
}
