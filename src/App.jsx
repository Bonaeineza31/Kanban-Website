import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import Layout from "./components/layout"
import Daily from "./components/daily"
import Weekly from "./components/weekly"
import Monthly from "./components/monthly"
import Yearly from "./components/yearly"
import All from "./components/all"

function App() {
  const [tasks, setTasks] = useState([

  // Daily tasks
  { id: 1, name: "Review class notes", duration: "daily", createdAt: new Date() },
  { id: 2, name: "Do assigned readings", duration: "daily", createdAt: new Date() },
  { id: 3, name: "Check school email", duration: "daily", createdAt: new Date() },
  { id: 4, name: "Prepare for tomorrow's classes", duration: "daily", createdAt: new Date() },

  // Weekly tasks
  { id: 5, name: "Finish weekly assignments", duration: "weekly", createdAt: new Date() },
  { id: 6, name: "Attend study group", duration: "weekly", createdAt: new Date() },
  { id: 7, name: "Clean up study area", duration: "weekly", createdAt: new Date() },
  { id: 8, name: "Plan next week's schedule", duration: "weekly", createdAt: new Date() },

  // Monthly tasks
  { id: 9, name: "Organize class materials", duration: "monthly", createdAt: new Date() },
  { id: 10, name: "Review previous topics", duration: "monthly", createdAt: new Date() },
  { id: 11, name: "Meet with academic advisor", duration: "monthly", createdAt: new Date() },

  // Yearly tasks
  { id: 12, name: "Register for new semester", duration: "yearly", createdAt: new Date() },
  { id: 13, name: "Renew student ID", duration: "yearly", createdAt: new Date() },
  { id: 14, name: "Update resume/CV", duration: "yearly", createdAt: new Date() },
])

  const addTask = (name, duration) => {
    const newTask = {
      id: Date.now(),
      name,
      duration,
      createdAt: new Date(),
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const editTask = (id, newName) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, name: newName } : task)))
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout onAddTask={addTask} />}>
          <Route index element={<Navigate to="/all" replace />} />
          <Route path="daily" element={<Daily tasks={tasks} onEditTask={editTask} onDeleteTask={deleteTask} />} />
          <Route path="weekly" element={<Weekly tasks={tasks} onEditTask={editTask} onDeleteTask={deleteTask} />} />
          <Route path="monthly" element={<Monthly tasks={tasks} onEditTask={editTask} onDeleteTask={deleteTask} />} />
          <Route path="yearly" element={<Yearly tasks={tasks} onEditTask={editTask} onDeleteTask={deleteTask} />} />
          <Route path="all" element={<All tasks={tasks} onEditTask={editTask} onDeleteTask={deleteTask} />} />
          <Route path="*" element={<Navigate to="/all" replace />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
