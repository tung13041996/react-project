import React from 'react'
import styles from './styles.scss'

export default function ToDoList({toDoList}) {
  return (
    <div className="todo-list">
        <div className="group-input">
            <input type="text" placeholder="Add task..." />
            <button>Add</button>
        </div>

        <h2>All task need to do</h2>

        <div className="task-list">
            <div className="task-done">
                <h3>Task Done</h3>
                {
                    toDoList.map(e => {
                        if (e.isCompleted) {
                            <div className="task-item">
                                <div className="task-item_name">{e.name}</div>
                            </div>
                        }
                    })
                }
            </div>

            <div className="task-undone">
                <h3>Task Undone</h3>
                {
                    toDoList.map(e => {
                        if (e.isCompleted) {
                            <div className="task-item">
                                <div className="task-item_name">{e.name}</div>
                            </div>
                        }
                    })
                }
            </div>
        </div>
    </div>
  )
}
