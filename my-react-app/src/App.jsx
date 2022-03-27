import { useState } from "react"
import CountDownBox from "./assets/components/CountDownBox"
import ToDoList from "./assets/components/ToDoList"

function App() {

  const [toDoList, setToDoList] = useState([
    {
      id: 1,
      name: 'Task 1',
      isCompleted: false
    },
    {
      id: 2,
      name: 'Task 2',
      isCompleted: true
    }
  ])

  const handleAdd = (value) => {
    setToDoList([
      ...toDoList,
        {
            id: Date.now() + '-' + Math.random(),
            name: value, 
        }
    ])
  }

  const handleCompleted = (task) => {
    task.isCompleted = true
    setToDoList([...toDoList]);
}

const handleUncompleted = (task) => {
    task.isCompleted = false
    setToDoList([...toDoList]);
}

  return (
    <div className="App">
      {/* <CountDownBox name="Peter" number={0}/> */}
      <ToDoList toDoList = {toDoList} handleAdd={handleAdd} handleUncompleted={handleUncompleted} handleCompleted={handleCompleted}/>
    </div>
  )
}

export default App
