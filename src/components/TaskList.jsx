import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskList() {
    
    const {tasks } = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1 className='text-white text-6xl text-center font-bold pt-6'>No hay tareas pendientes</h1>
    }

  return (
    <div className="grid grid-cols-4 gap-3 m-10">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id}/>
      ))}
    </div>
  )
}

export default TaskList
