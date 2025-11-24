import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const API_URL = "http://localhost:3000/tasks";

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      setTasks(response.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description.trim()) {
      setError("Description can't be blank");
      return;
    }

    try {
      const response = await axios.post(API_URL, {
        task: { description },
      });
      setTasks([response.data, ...tasks]);
      setDescription("");
      setError("");
    } catch (err) {
      if (err.response && err.response.data.errors) {
        setError(err.response.data.errors.join(", "));
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Task Tracker</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "70%", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 12px", marginLeft: "10px" }}>
          Add Task
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.description} <small>({new Date(task.created_at).toLocaleString()})</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
