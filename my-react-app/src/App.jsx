import CountDownBox from "./assets/components/CountDownBox"
import ToDoList from "./assets/components/ToDoList"

function App() {
  return (
    <div className="App">
      {/* <CountDownBox name="Peter" number={0}/> */}
      <ToDoList toDoList = {[
        {
          name: 'Task 1',
          isCompleted: true
        },
        {
          name: 'Task 2',
          isCompleted: false
        }
      ]} />
    </div>
  )
}

export default App
