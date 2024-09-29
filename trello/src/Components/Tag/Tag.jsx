import React from "react";
import classes from "./Tag.module.css";

function Tag({ priority }) {
  let clase = "is-danger";

  switch (priority) {
    case "alta":
      clase = "is-danger";
      break;
    case "media":
      clase = "is-warning";
      break;
    case "baja":
      clase = "is-success";
      break;
  }

  return (
    <>
      <span className={`tag ${clase}`} id={classes.tag}></span>
    </>
  );
}

export default Tag;
