import {React, useState} from 'react'
import styles from './styles.scss'

export default function ToDoList({toDoList, handleAdd, handleCompleted, handleUncompleted}) {

    const [value, setValue] = useState('')

  const _handleAdd = () => {
      handleAdd(value);
      setValue('')
  }

  const _handleCompleted = (task) => {
    handleCompleted(task)
}

const _handleUncompleted = (task) => {
    handleUncompleted(task)
}


  return (
    <div className="todo-list">
        <div className="group-input">
            <input value={value} onChange = {event => setValue(event.target.value)} type="text" placeholder="Add task..." />
            <button onClick={_handleAdd}>Add</button>
        </div>

        <div className="task-list">
            <div className="task-undone">
                <h3>Task Undone</h3>
                {
                    toDoList.map((e,i) => 
                        !e.isCompleted ? 
                            <div key={e.id} className="task-item">
                            <div onClick={() => _handleCompleted(i)} className="task-item_name">{e.name}</div>
                        </div>
                        : null 
                    )
                }
            </div>

            <div className="task-done">
                <h3>Task Done</h3>
                {
                    toDoList.filter(e => e.isCompleted).map(e => 
                        <div key={e.id} className="task-item">
                            <div onClick={_handleUncompleted} className="task-item_name">{e.name}</div>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}
