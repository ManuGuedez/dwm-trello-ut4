import React, {useState} from "react";
import classes from "./Column.module.css";
import Card from "../Card/Card.jsx";
import CreateTaskModal from "../CreateTaskModal/CreateTaskModal.jsx";

function Column({ title, tasks, addNewTask, editTask}) {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleButton = () => {
    console.log("entró al boton de add task")
    setModalIsVisible(true);
  }

  const closeModal = () => {
    setModalIsVisible(false);
  }

  return (
    <div className={`column ${classes.column}`}>
      <p className="title is-4">{title}</p>
      <div className={classes.cardsContainer}>
        {tasks.map((task, index) => {
          return <Card key={index} task={task} priority={task.priority} editTask={editTask}></Card>;
        })}
      </div>
      <button style={{marginTop: "10px"}} onClick={handleButton}>+ Add task</button>
      {modalIsVisible && <CreateTaskModal addNewTask={addNewTask} closeModal={closeModal}/>}
    </div>
  );
}

export default Column;