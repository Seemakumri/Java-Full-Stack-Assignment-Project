import React, { useState } from "react";

const TaskForm = ({ addTask }) => {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(formData);

    setFormData({
      title: "",
      description: "",
      status: ""
    });
  };

  return (

    <form
      className="task-form"
      onSubmit={handleSubmit}
    >

      <input
        type="text"
        name="title"
        placeholder="Enter Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Enter Description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        required
      >

        <option value="">
          Select Status
        </option>

        <option value="Pending">
          Pending
        </option>

        <option value="Completed">
          Completed
        </option>

      </select>

      <button type="submit">
        Add Task
      </button>

    </form>
  );
};

export default TaskForm;