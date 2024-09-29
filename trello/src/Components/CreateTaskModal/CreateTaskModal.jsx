import React, { useRef } from "react";
import classes from "./CreateTaskModal.module.css";

function CreateTaskModal({ addNewTask, closeModal }) {
  const title = useRef("");
  const description = useRef("");
  const assigned = useRef("");
  const priority = useRef("");
  const state = useRef("");
  const deadline = useRef("");

  const handleButton = () => {
    const newTitle = title.current.value;
    const newDescription = description.current.value;
    const newAssigned = assigned.current.value;
    const newPriority = priority.current.value;
    const newState = state.current.value;
    const newDeadline = deadline.current.value;
    if (
      (newTitle.trim() == "" && newDescription.trim() == "") ||
      newState == "" ||
      newPriority == "" ||
      newState == "" ||
      newDeadline == ""
    ) {
        window.alert("Falta completar datos!!");
    } else {
      console.log(
        newTitle,
        newDescription,
        newAssigned,
        newPriority,
        newState,
        newDeadline
      );
      addNewTask(
        newTitle,
        newDescription,
        newAssigned,
        newPriority,
        newState,
        newDeadline
      );
      closeModal();
    }
  };

  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <p className="title is-4">Nueva tarea</p>
        <div className={classes.modalContainer}>
          <div className={classes.field}>
            <label className="label">Título</label>
            <div className="control">
              <input
                ref={title}
                className="input"
                type="text"
                placeholder="Text input"
              />
            </div>
          </div>
          <div className={classes.field}>
            <label className="label">Descripción</label>
            <div className="control">
              <input
                ref={description}
                className="input"
                type="text"
                placeholder="Text input"
              />
            </div>
          </div>
          <div className={`${classes.field} has-addons`}>
            <div className="control is-expanded">
              <label className="label">Asignado</label>
              <div className="select is-fullwidth">
                <select name="assigned" id="task-assigned" ref={assigned}>
                  <option value="Asignado 1">Asignado 1</option>
                  <option value="Asignado 2">Asignado 2</option>
                  <option value="Asignado 3">Asignado 3</option>
                  <option value="Asignado 4">Asignado 4</option>
                </select>
              </div>
            </div>
          </div>
          <div className={`${classes.field} has-addons`}>
            <div className="control is-expanded">
              <label className="label">Prioridad</label>
              <div className="select is-fullwidth">
                <select name="priority" id="task-priority" ref={priority}>
                  <option value="alta">Alta</option>
                  <option value="media">Media</option>
                  <option value="baja">Baja</option>
                </select>
              </div>
            </div>
          </div>
          <div className={`${classes.field} has-addons`}>
            <div className="control is-expanded">
              <label className="label">Estado</label>
              <div className="select is-fullwidth">
                <select name="state" id="task-state" ref={state}>
                  <option value="Backlog">Backlog</option>
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Blocked">Blocked</option>
                  <option value="Done">Done</option>
                </select>
              </div>
            </div>
          </div>
          <div className={classes.fieldDate}>
            <label htmlFor="deadline" className="label">
              Fecha límite
            </label>
            <input
              type="date"
              className={classes.deadline}
              id="deadline"
              ref={deadline}
            />
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <button className="button is-danger" id="cancel" onClick={closeModal}>
            Cancelar
          </button>
          <button
            className="button is-primary"
            id="accept"
            onClick={handleButton}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateTaskModal;
