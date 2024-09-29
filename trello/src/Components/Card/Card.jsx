import React, { useState } from "react";
import Tag from "../Tag/Tag.jsx";
import classes from "./Card.module.css";
import EditTaskModal from "../EditTaskModal/EditTaskModal.jsx";

function Card({ priority, task, editTask }) {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleOnclickEdition = () => {
    if (!showEditModal) {
      setShowEditModal(true);
    }
  };

  const closeEditModal = () => {
    if (showEditModal) {
      setShowEditModal(false);
    }
  };

  return (
    <div className={`card ${classes.card}`}>
      <Tag priority={priority} />
      <div className={classes.container}>
        <p className="title is-5">{task.title}</p>
        <div>
          <button className={classes.buttonEdit} onClick={handleOnclickEdition}>
            🖋️
          </button>
          {showEditModal && (
            <EditTaskModal task={task} closeModal={closeEditModal} editTask={editTask}/>
          )}
          <button className={classes.buttonEdit}>➕</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
