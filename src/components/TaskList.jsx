import React from "react";

const TaskList = ({
  tasks,
  deleteTask
}) => {

  return (

    <div className="task-list">

      {
        tasks.map((task) => (

          <div
            key={task.id}
            className="task-card"
          >

            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <span className="status">
              {task.status}
            </span>

            <button
              onClick={() =>
                deleteTask(task.id)
              }
            >
              Delete
            </button>

          </div>
        ))
      }

    </div>
  );
};

export default TaskList;