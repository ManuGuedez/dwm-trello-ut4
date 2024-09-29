import React from "react";
import classes from "./ReadOnlyTaskModal.module.css";

function ReadOnlyTaskModal({ task, closeModal }) {
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.container}>
          <p className="title is-5">{task.title}</p>
          <button className="delete" onClick={closeModal}></button>
        </div>
        <p className={classes.title}>🤸‍♀️ Estado:</p>
        <p className={classes.content}>{task.state}</p>
        <p className={classes.title}>📰 Descripción:</p>
        <p className={classes.content}>{task.description}</p>
        <p className={classes.title}>👤 Asignado:</p>
        <p className={classes.content}>{task.assigned}</p>
        <p className={classes.title}>🗓️ Fecha límite: </p>
        <p className={classes.content}>{task.deadline}</p>
      </div>
    </div>
  );
}

export default ReadOnlyTaskModal;
