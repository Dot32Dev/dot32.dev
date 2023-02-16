import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'

import Header from './Header'
import ProjectList from './pages/ProjectList'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />

      {/* <ProjectList /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/dot32" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
