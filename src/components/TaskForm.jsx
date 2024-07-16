import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)


  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description
    });
    setTitle("")
    setDescription("")
  };

  return (
    <form className="text-center pt-11 grid gap-3 grid-cols-1 max-w-xs mx-auto" onSubmit={handleSubmit}>
      <input className="p-3 rounded-md"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Escribe tu tarea"
        value={title}
        autoFocus
      />

      <textarea className="pb-8 pt-3 px-3 rounded-md"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Escribe la descripcion de tu tarea"
        value={description}
      />
      <button className="bg-green-500 rounded-md p-3 font-bold hover:bg-green-600">Guardar</button>
    </form>
  );
}

export default TaskForm;
