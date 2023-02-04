import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Project from './Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>Featured</h2>

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
        tags="Website"
        description="Generate relative timestamps that you can paste into Discord chat"
      />

      <Project
        name="Tiny Tank"
        link="https://dot32.itch.io/tiny-tank"
        image="https://dot32.dev/projects/tinytankthumb.png"
        tags="Windows, MacOS"
        description="Fight your way through a series of levels with intelligent AI and try not to die in this top down shooter!"
      />

      <h2>Recent</h2>

      <Project
        name="Wave Function Collapse"
        link="https://github.com/Dot32IsCool/wave_function_collapse"
        image="https://cdn.discordapp.com/attachments/577832597686583310/1036186311666712616/Screen_Shot_2022-10-30_at_15.54.20.png"
        tags="Rust compiler required"
        description="A CLI WFC demo written in Rust 🦀"
      />

      <Project
        name="Bevy Tiny Tank clone"
        link="https://github.com/Dot32IsCool/bevy-moving-circle"
        image="https://cdn.discordapp.com/attachments/577832597686583310/1010396427299606528/Screen_Shot_2022-08-20_at_11.52.38.png"
        tags="Rust compiler required"
        description="A half fetaured recreation of my Love2D Tiny Tank game"
      />

      <Project
        name="My intro (Rust edition)"
        link="https://github.com/Dot32IsCool/dot32-intro-rs"
        image="https://cdn.discordapp.com/attachments/577832597686583310/976074056656887858/Screen_Shot_2022-05-17_at_18.44.55.png"
        tags="Rust compiler required"
        description="My classic Love2D intro rewritten with rust and bevy"
      />

      <Project
        name="Timer bot"
        link="https://discord.com/api/oauth2/authorize?client_id=927501769272094720&permissions=274877991936&scope=bot"
        image="https://cdn.discordapp.com/attachments/577832597686583310/927860469522374676/Screen_Shot_2022-01-04_at_17.46.06.png"
        tags="Discord bot"
        description="A simple bot that can create timers within  discord, based of my discord timestamp generator website"
      />

      <Project
        name="Connect 4"
        link="https://github.com/Dot32IsCool/comand-line-connect-4"
        image="https://cdn.discordapp.com/attachments/577832597686583310/927858316628070410/Screen_Shot_2022-01-04_at_17.37.30.png"
        tags="Rust compiler required"
        description="A command-line-interface version of the popular connect 4 game, complete with animations for dropping every piece 👌"
      />

      <Project
        name="Norwegian number practice"
        link="https://github.com/Dot32IsCool/norwegian-numbers"
        image="https://cdn.discordapp.com/attachments/577832597686583310/918064935395807273/Screen_Shot_2021-12-08_at_17.02.01.png"
        tags="Rust compiler required"
        description="Learn how to count in Norwegian; although this project was primarily just an excuse to use Rust 😎 🦀"
      />

      <Project
        name="Procedural animation with inverse kinematics"
        link="https://github.com/Dot32IsCool/platformer"
        image="https://cdn.discordapp.com/attachments/577832597686583310/917718774134763520/Screen_Shot_2021-12-07_at_18.06.27.png"
        tags="Love2D required"
        description="A platformer demo with procedural animation"
      />

      <Project
        name="Custom ball physics engine"
        link="https://github.com/Dot32IsCool/ball-physics-engine"
        image="https://cdn.discordapp.com/attachments/577832597686583310/906352104111734784/Screen_Shot_2021-11-06_at_9.19.19_am.png"
        tags="Love2D required"
        description="Custom physics engine built on verlet integration"
      />

      <Project
        name="3D engine in Love2D"
        link="https://github.com/Dot32IsCool/3D-in-love2D"
        image="https://user-images.githubusercontent.com/61964090/127146335-16ba2a76-f36b-4096-8545-b18322c615cc.png"
        tags="Love2D required"
        description="Basic 3D engine using a custom shader and depth buffer"
      />

      <Project
        name="Count Lines"
        link="https://github.com/Dot32IsCool/count-lines"
        image="https://user-images.githubusercontent.com/61964090/123012218-7696b000-d3f4-11eb-8555-2cbff6a57586.png"
        tags="Nim compiler required"
        description="Will automatically count how many lines of (Lua) sourcecode is in a folder"
      />

      <Project
        name="Italian Number Practice"
        link="https://github.com/Dot32IsCool/italian-numbers"
        image="https://user-images.githubusercontent.com/61964090/123534049-b2ab7700-d74c-11eb-8888-3e9799c9cb45.png"
        tags="Nim compiler required"
        description="Will quiz you on your knowlage of Italian numbers"
      />

      <Project
        name="Quick and simple platformer"
        link="https://github.com/Dot32IsCool/QuickAndSimplePlatformer-Game"
        image="https://dot32.dev/projects/q&spthumb.png"
        tags="Windows, MacOS"
        description="Contrary to the name, most people take a while to finish, due to he janky af controls. Nevertheless, this game has speedrunning potential"
      />  
    </div>
  )
}

export default App
