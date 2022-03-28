import { useState } from "react"
import CountDownBox from "./assets/components/CountDownBox"
import ToDoList from "./assets/components/ToDoList"
import Accordion from "./assets/components/Accordion"

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
    
    const toDo = {
      id: Date.now() + '-' + Math.random(),
      name: value,
      isCompleted: false 
  }

    toDoList.push(toDo)
    setToDoList([...toDoList])
  }

  const handleCompleted = (index) => {
    
    toDoList[index].isCompleted = true
    console.log(toDoList)
    setToDoList([...toDoList]);
  
}

const handleUncompleted = (index) => {
    toDoList[index].isCompleted = false
    setToDoList([...toDoList]);
}

const [accordion, setAccordion] = useState([
  {
    title: "Item 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque facere aliquam ea fugiat. Eum dolorum magnam dignissimos facere error facilis, sint voluptas labore fugit hic id itaque animi cupiditate quisquam sed harum culpa? Itaque asperiores voluptatibus laboriosam rerum aliquam saepe quos omnis ad porro animi atque pariatur et dolorum sit incidunt placeat fugit, soluta eum accusamus explicabo veritatis magni ullam ipsum quae! Error maxime incidunt, sint dolore placeat dolores voluptatum hic expedita eum suscipit, quidem esse? Impedit, quo quisquam.",
    isOpen: false,
  },
  {
    title: "Item 2",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, ipsa. Inventore, amet voluptate aperiam dicta sed numquam. Repellat molestiae fuga modi aut, enim veniam quis laborum dicta dignissimos voluptates esse ex nostrum, eaque optio libero accusantium quos adipisci sunt nobis nihil a dolorem, quibusdam praesentium? Saepe voluptates dolor incidunt debitis rerum, modi soluta aut consequatur repudiandae ex quo porro voluptatibus repellat similique. Doloremque ipsa saepe tenetur, consequuntur nulla fuga cumque iure magni, reiciendis modi nihil ratione. Sint dolore, totam inventore cumque tempora assumenda consectetur quisquam ab vero. Eligendi tenetur deleniti, voluptate iure praesentium natus numquam. Consectetur corporis consequatur quia molestiae.",
    isOpen: false,
  }
])
const handleActive = (index) => {
  accordion[index].isOpen = !accordion[index].isOpen
  setAccordion([...accordion]);
}

  return (
    <div className="App">
      {/* <CountDownBox name="Peter" number={0}/> */}
      {/* <ToDoList toDoList = {toDoList} handleAdd={handleAdd} handleUncompleted={handleUncompleted} handleCompleted={handleCompleted}/> */}
      <Accordion Accordion = { accordion } handleActive = { handleActive } />
    </div>
  )
}

export default App
