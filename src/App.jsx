import { useState } from 'react'
import Book from './Book.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Book/>
    </>
  )
}

export default App
