import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ProgressTracker from './components/ProgressTracker';
import Signup from './auth/Signup';

export default function App() {
  // Task state
  const [tasks, setTasks] = useState([]);

  // Session user state; always null on page reload
  const [user, setUser] = useState(null);

  // Signup handler; sets user for session
  const handleSignup = (username) => {
    setUser(username);
  };

  // Task functions
  const addTask = (task) => setTasks([...tasks, task]);
  const updateTask = (updatedTask, index) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };
  const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));
  const clearTasks = () => setTasks([]);

  // Always show Signup page first
  if (!user) return <Signup onSignup={handleSignup} />;

  // Show the TaskBuddy app after signup
  return (
    <div className="App">
      <header>
        <h1>TaskBuddy</h1>
        <p>Welcome, {user}!</p>
      </header>

      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
      <ProgressTracker tasks={tasks} />

      {tasks.length > 0 && (
        <button onClick={clearTasks}>Clear All Tasks</button>
      )}
    </div>
  );
}
