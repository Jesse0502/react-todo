import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../app.css";
import React from "react";

const Overview = (props) => {
  const element = <FontAwesomeIcon icon={faTrash} />;
  const { tasks } = props;
  return (
    <div>
      {tasks.map((task) => (
        <div className="task" key={task.id}>
          <h2>{task.title}</h2>
          <button onClick={() => props.delete(task.id)}>{element}</button>
        </div>
      ))}
    </div>
  );
};

export default Overview;
