import React, { useEffect, useState } from "react";
import "./App.css";
import Column from "./Components/Column/Column.jsx";
import CreateTaskModal from "./Components/CreateTaskModal/CreateTaskModal.jsx";

function App() {
  const url = "http://localhost:3000/tasks";

  async function fetchDataAW() {
    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json(); // extract JSON from response
      return data;
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  const [createModalIsVisible, setCreateModalIsVisible] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let tasksPromise = fetchDataAW();

    tasksPromise.then((data) => {
      setTasks([...data]);
    });
    console.log("tareas: " + tasks);
  }, []);

  // usar el useEffect(() => {aca hago el fetch y hago el setTasks}, []); con esto lo traigo del back
  // usar useState con las tasks
  // let tasks = [
  //   {
  //     id: "1",
  //     title: "Task 1",
  //     description: "Description 1",
  //     assigned: "Asignado 1",
  //     priority: "media",
  //     state: "Backlog",
  //     deadline: "2024-08-28",
  //   },
  //   {
  //     id: "1",
  //     title: "Task 2",
  //     description: "Description 1",
  //     assigned: "Asignado 1",
  //     priority: "baja",
  //     state: "To Do",
  //     deadline: "2024-08-28",
  //   },
  // ];

  async function postTask(task) {
    console.log("taskA: pepe ");
    try {
      await fetch(url, {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  async function updateTask(task) {
    try {
      await fetch(url + `/${task.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  const addTask = (title, description, assigned, priority, state, deadline) => {
    const newTask = {
      title: title,
      description: description,
      assigned: assigned,
      priority: priority,
      state: state,
      deadline: deadline,
    };
    postTask(newTask);
    setTasks([...tasks, newTask]);
  };

  const editTask = (task) => {
    updateTask(task);
    setTasks([
      ...tasks.filter((currentTask) => currentTask.id !== task.id),
      task,
    ]);
  };

  const columns = ["Backlog", "To Do", "In Progress", "Blocked", "Done"];
  return (
    <>
      <p className="title is-1">Trello</p>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
          marginRight: "10px"
        }}
      >
        <button className="button" onClick={() => {setCreateModalIsVisible(true)}} style={{backgroundColor:"lightpink"}}>+ Add new task</button>
        {createModalIsVisible && <CreateTaskModal addNewTask={addTask} closeModal={() => setCreateModalIsVisible(false)}/>}
      </div>
      <div
        className={`columns`}
        style={{
          padding: "10px",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          order: "5",
        }}
      >
        {columns.map((column, index) => {
          return (
            <Column
              key={index}
              title={column}
              tasks={tasks.filter((task) => task.state === column)}
              addNewTask={addTask}
              editTask={editTask}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
