import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Thing from './Thing.jsx' 
import Project from './Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Project
        name="Dot32"
        link="https://dot32.dev"
        image="https://avatars.githubusercontent.com/u/61964090?v=4"
        tags="Web, Rust"
        description="A website for my personal projects and blog posts."
      />

      <Project
        name="Discord Timestamp Generator"
        link="https://discordtimestampgenerator.netlify.app/"
        image="https://cdn.discordapp.com/attachments/577832597686583310/918749004714639400/Screen_Shot_2021-12-10_at_14.20.21.png"
        tags="Web, JavaScript"
        description="Generate relative timestamps that you can paste into Discord chat"
      />
    </div>
  )
}

export default App
