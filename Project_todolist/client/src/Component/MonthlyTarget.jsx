import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

// Helper function to calculate the remaining days from the current date
const calculateRemainingDays = (taskDate) => {
  const currentDate = new Date(); // Get the current date
  const taskCreationDate = new Date(taskDate); // Convert task date to a Date object
  const timeDifference = currentDate.getTime() - taskCreationDate.getTime(); // Calculate time difference in milliseconds
  const dayDifference = Math.floor(timeDifference / (1000 * 3600 * 24)); // Convert milliseconds to days
  return Math.max(30 - dayDifference, 0); // Start with 30 days, decrement by the day difference
};

function MonthlyTarget() {
  const [tasks, setTasks] = useState([]); // State to manage incomplete tasks
  const [completedTasks, setCompletedTasks] = useState([]); // State to manage completed tasks
  const [input, setInput] = useState(""); // State to manage input field

  // Function to add a task
  const addTask = () => {
    if (input.trim() !== "") {
      const newTask = {
        text: input.trim(),
        date: new Date().toISOString(), // Store task creation date
      };
      setTasks([...tasks, newTask]); // Add to incomplete tasks
      setInput("");
    }
  };

  // Function to handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  // Function to complete a task
  const completeTask = (index) => {
    const taskToComplete = tasks[index];
    setTasks(tasks.filter((_, i) => i !== index)); // Remove from incomplete tasks
    setCompletedTasks([...completedTasks, taskToComplete]); // Add to completed tasks
  };

  // Recalculate the days remaining when the component renders
  useEffect(() => {
    const timer = setInterval(() => {
      setTasks((prevTasks) => [...prevTasks]); // Trigger re-render to update remaining days
    }, 1000 * 3600 * 24); // Set interval to 24 hours
    return () => clearInterval(timer); // Clear interval on component unmount
  }, []);

  return (
    <div>
        <Navbar/>
      <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-r from-purple-300 via-blue-300 to-teal-300">
        {/* Task List Section */}
        <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-xl border border-gray-200 mt-16">
          <h1 className="text-4xl font-extrabold text-center mb-0 text-gray-800">
            To-Do List
          </h1>
          <h5 className="text-lg font-extrabold text-center mb-4 text-gray-800">Monthly Task</h5>

          {/* Incomplete Task List Section */}
          {tasks.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Incomplete Tasks
              </h2>
              <ul className="space-y-4">
                {tasks.map((task, index) => (
                  <li
                    key={index}
                    className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 text-lg font-medium">
                        {task.text}
                      </span>
                      <button
                        onClick={() => completeTask(index)}
                        className="px-4 py-2 text-sm text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300"
                      >
                        Complete
                      </button>
                    </div>
                    <div className="text-sm mt-2 text-gray-600">
                      Created on: {new Date(task.date).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-red-500 mt-1">
                      Days Remaining: {calculateRemainingDays(task.date)}
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Completed Task List Section */}
          {completedTasks.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                Completed Tasks
              </h2>
              <ul className="space-y-4">
                {completedTasks.map((task, index) => (
                  <li
                    key={index}
                    className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between">
                      <span className="line-through text-gray-600 text-lg font-medium">
                        {task.text}
                      </span>
                      <button className="px-4 py-2 text-sm text-white bg-gray-500 rounded-lg cursor-default">
                        Completed
                      </button>
                    </div>
                    <div className="text-sm mt-2 text-gray-600">
                      Completed on: {new Date(task.date).toLocaleDateString()}
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Input Section at the Bottom */}
        <div className="fixed bottom-0 left-0 w-full p-4 bg-transparent">
          <div className="flex items-center max-w-lg mx-auto bg-white rounded-lg shadow-md border border-gray-300">
            <input
              type="text"
              className="w-full px-4 py-2 bg-white text-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a new task"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress} // Add task on Enter key press
            />
            <button
              onClick={addTask}
              className="px-4 py-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 transition duration-300"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MonthlyTarget;
