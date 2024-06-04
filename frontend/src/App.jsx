import { useState } from 'react'
import './App.css'
import { BusinessCard } from './Components/BusinessCard'
import { CreateTodo } from './Components/CreateCard'

function App() {
  

  const [businesscards, setTodos] = useState([])

  fetch("http://localhost:3000/businesscards")
  .then(async function(res){
    const json = await res.json();
    setTodos(json.businesscards);
  })
console.log(businesscards)
  return (
   <div>
    <CreateTodo></CreateTodo>
    <BusinessCard propss={businesscards}> </BusinessCard>
   </div>
  )
}

export default App
