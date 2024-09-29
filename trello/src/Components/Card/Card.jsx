import React, { useState } from "react";
import Tag from "../Tag/Tag.jsx";
import classes from "./Card.module.css";
import EditTaskModal from "../EditTaskModal/EditTaskModal.jsx";
import ReadOnlyTaskModal from "../ReadOnlyTaskModal/ReadOnlyTaskModal.jsx";

function Card({ priority, task, editTask }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showInfoModal, setInfoModal] = useState(false);

  const handleOnclickEdition = () => {
    if (!showEditModal) {
      setShowEditModal(true);
      setInfoModal(false);
    }
  };

  const closeEditModal = () => {
    if (showEditModal) {
      setShowEditModal(false);
    }
  };

  const handleOnClickInfo = () => {
    if(!showInfoModal) {
      setInfoModal(true);
      setShowEditModal(false); // por las dudas 
    }
  }

  const closeInfoModal = () => {
    if(showInfoModal){
      setInfoModal(false);
    }
  }

  return (
    <div className={`card ${classes.card}`}>
      <Tag priority={priority} />
      <div className={classes.container}>
        <p className="title is-5">{task.title}</p>
        <div>
          <button className={classes.buttonEdit} onClick={handleOnclickEdition} title="Editar tarea.">
            🖋️
          </button>
          {showEditModal && (
            <EditTaskModal task={task} closeModal={closeEditModal} editTask={editTask}/>
          )}
          <button className={classes.buttonEdit} onClick={handleOnClickInfo} title="Despliega información de la tarea.">➕</button>
          {showInfoModal && <ReadOnlyTaskModal task={task} closeModal={closeInfoModal}/>}
        </div>
      </div>
    </div>
  );
}

export default Card;
