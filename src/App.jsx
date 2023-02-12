import { useState } from 'react'
import './App.css'
import Header from './Header'
import ProjectList from './pages/ProjectList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />

      <br/>
      <br/>
      <br/>

      <ProjectList />
    </div>
  )
}

export default App
