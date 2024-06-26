import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewTask from "./pages/NewTask";
import Completed from "./pages/Completed";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
function App() {
  // Initialize the tasks state from localStorage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}-${month}-${year}`;
    let currentTime = `${hour}:${min}:${sec}`;
    e.preventDefault();
    let newTasks = {
      title: title,
      desc: desc,
      id: Date.now(), // unique identifier for each task
      completed: false,
      date: currentDate,
      time: currentTime,
    };
    let arrayCopy = [...tasks];
    arrayCopy.push(newTasks);
    setTasks(arrayCopy);
    toast.success("Task Created");
    setTitle("");
    setDesc("");
  };

  const handleDelete = (taskToDelete) => {
    let updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(updatedTasks);
    toast.success("Task Deleted");
  };

  const handleComplete = (taskToComplete) => {
    let updatedTasks = tasks.map((task, i) => {
      if (task.id === taskToComplete.id) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
    toast.success("Task Completed");
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tasks={tasks}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          }
        />
        <Route
          path="/newtask"
          element={
            <NewTask
              title={title}
              setTitle={setTitle}
              desc={desc}
              setDesc={setDesc}
              tasks={tasks}
              handleSubmit={handleSubmit}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          }
        />
        <Route
          path="/completed"
          element={
            <Completed
              tasks={tasks.filter((task) => task.completed)}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          }
        />
        <Route
          path="/todo"
          element={
            <Home
              tasks={tasks}
              handleDelete={handleDelete}
              handleComplete={handleComplete}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
