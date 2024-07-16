import { useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskCard({ task }) {

  const {deleteTask } = useContext(TaskContext)

  return (
    <div className="bg-gray-700 text-white p-3 rounded-md">
      <h1 className="text-2xl font-medium pb-2 text-center">{task.title}</h1>
      <p className="pb-5">{task.description}</p>
      <button className="bg-red-500 p-2 rounded-md hover:bg-red-800" onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
      
    </div>
  );
}
 
export default TaskCard;
