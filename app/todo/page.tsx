"use client";
import React, { useState } from "react";
import { TaskItem } from "../../Components/TaskItem"; // Adjust path as needed
import { Task } from "@/schemas";

const initialTasks: Task[] = [
  { id: 1, title: "Write project proposal", status: "todo" },
  { id: 2, title: "Design UI wireframes", status: "progressing" },
  { id: 3, title: "Deploy backend API", status: "done" },
];

const statuses: { label: string; key: Task["status"] }[] = [
  { label: "To Do", key: "todo" },
  { label: "In Progress", key: "progressing" },
  { label: "Done", key: "done" },
];

export default function TaskTrackerPage() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Task Tracker
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {statuses.map(({ label, key }) => (
          <div key={key} className="bg-white rounded-xl shadow p-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              {label}
            </h2>
            <div
              className="space-y-3"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setTasks((prevTasks) => [
                  ...prevTasks,
                  { id: Date.now(), title: "", status: key },
                ]);
              }}
            >
              {tasks
                .filter((task) => task.status === key)
                .map((task) => (
                  <TaskItem
                    key={task.id}
                    title={task.title}
                    status={task.status}
                    itemId={task.id.toString()}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
