import React from "react";
import "./NewTask.css";
function NewTask({
  title,
  desc,
  handleSubmit,
  setTitle,
  setDesc,
  searchQuery,
  setSearchQuery,
}) {
  return (
    <div class="container">
      <aside class="menu">
        <div
          className="brand"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "2vw 0 4vw 0",
          }}
        >
          <i style={{ fontSize: "4.5vw" }} class="fa-brands fa-rebel"></i>
          <h2 style={{ fontSize: "3vw" }}>Tasker</h2>
        </div>

        <div className="menu-header"></div>
        <nav>
          <ul>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.5vw",
                gap: "1.4vw",
              }}
            >
              <i
                class="fa-brands fa-searchengin"
                style={{
                  fontSize: "2vw",
                }}
              ></i>
              <input
                type="text"
                placeholder="Search by title"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ fontSize: "1.2vw" }}
              />
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.5vw",
                gap: "1.4vw",
              }}
            >
              <i
                class="fa-solid fa-clipboard-list"
                style={{ fontSize: "1.7vw" }}
              ></i>
              <a href="/todo">To Do</a>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.5vw",
                gap: "1.4vw",
              }}
            >
              <i class="fa-solid fa-circle-check"></i>
              <a href="/completed">Completed</a>
            </li>

            <li
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.5vw",
                gap: "1.4vw",
              }}
            >
              <i class="fa-solid fa-circle-plus"></i>
              <a href="/newtask">Add New Task</a>
            </li>
          </ul>
        </nav>
      </aside>
      <main class="sticky-wall-newTask">
        <div class="container1">
          <h1>Create a New Task</h1>
          <form class="task-form">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea
                id="description"
                name="description"
                rows="4"
                placeholder="Enter task description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" onClick={handleSubmit}>
              Add Task
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default NewTask;
