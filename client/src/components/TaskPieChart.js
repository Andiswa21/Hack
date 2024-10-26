import React from "react";
import { Pie } from "react-chartjs-2";

// Sample data (you can pass in your actual task data as props)
const taskData = {
  labels: ["Completed", "In Progress", "Pending", "On Hold"],
  datasets: [
    {
      data: [10, 5, 3, 2], // Example task counts
      backgroundColor: ["#4CAF50", "#FF9800", "#F44336", "#2196F3"], // Colors for each task type
    },
  ],
};

const TaskPieChart = () => {
  return (
    <div style={{ width: "300px", margin: "0 auto" }}>
      <h2>Task Status</h2>
      <Pie data={taskData} />
    </div>
  );
};

export default TaskPieChart;
