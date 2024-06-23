import React from "react";
import "./Home.css";
import Card from "../components/Card";
function Home({
  tasks,
  handleDelete,
  handleComplete,
  searchQuery,
  setSearchQuery,
}) {
  // filtering tasks on the basis of search keywords
  const filteredTasks =
    tasks &&
    tasks.filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <>
      <div className="container">
        <aside className="menu-home">
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
                <a href="/todoApp/#/todo">To Do</a>
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
                <a href="/todoApp/#/completed">Completed</a>
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
                <a href="/todoApp/#/newtask">Add New Task</a>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="content-box">
          <h1
            style={{
              textAlign: "left",
              padding: "3vw 0 1vw 3vw",
              display: "block",
            }}
          >
            Tasks To Do
          </h1>
          <main className="sticky-wall-home">
            {filteredTasks && filteredTasks.length === 0 ? (
              <h1>No Tasks Available</h1>
            ) : (
              <>
                {filteredTasks &&
                  filteredTasks
                    .filter((task) => !task.completed) //filtering tasks that have completed key as false, as they have to be shown in the completed section
                    .map((task) => {
                      return (
                        <Card
                          key={task.id}
                          task={task}
                          handleDelete={handleDelete}
                          handleComplete={handleComplete}
                        />
                      );
                    })}
                <div className="note add-note">
                  <button>
                    <a
                      href="/newtask"
                      style={{ color: "black", fontSize: "4vw" }}
                    >
                      +
                    </a>
                  </button>
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
