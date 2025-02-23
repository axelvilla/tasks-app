import React from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  
  return (
    <main className="bg-gray-800 h-screen">
      <div className="container mx-auto">
        <TaskForm/>
        <TaskList/>
      </div>
    </main>
  );
}

export default App;
