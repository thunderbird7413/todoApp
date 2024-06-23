import React from "react";
import "./Completed.css";
import Card1 from "../components/Card1";
function Completed({ tasks, handleDelete, searchQuery, setSearchQuery }) {
  return (
    <>
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
        <div className="content-box">
          <h1
            style={{
              textAlign: "left",
              padding: "3vw 0 2vw 3vw",
              display: "block",
            }}
          >
            Completed Tasks
          </h1>
          <main class="sticky-wall-completed">
            {tasks.length === 0 ? (
              <h1>No Tasks Available</h1>
            ) : (
              <>
                {tasks.map((task, index) => {
                  return (
                    <Card1
                      key={index}
                      task={task}
                      index={index}
                      handleDelete={handleDelete}
                    />
                  );
                })}
              </>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export default Completed;
