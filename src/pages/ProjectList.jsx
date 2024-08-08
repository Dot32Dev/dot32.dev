// import useDocumentTitle from './useDocumentTitle'
import { Helmet } from 'react-helmet';
import Project from '../Project'

export default function ProjectList(props) {
	// useDocumentTitle('Projects')
	return (
		<div className="projectList">
			<Helmet>
				<title>Projects</title>
				<meta name="description" content="Check out my personal projects!"/>
				
				<meta property="og:title" content="Projects - Dot32 dev" />
				{/* <meta property="og:image" content="/images/Dot32_Graffiti3.png" /> */}
				<meta property="og:description" content="Check out my personal projects!" />
				<meta name="author" content="Dot32"/>
			</Helmet>

			<br/>
			<br/>
			<br/>

			{/* <div className='landing-background-anim' style={{backgroundImage: "linear-gradient(green, blue)", left: "100%", top: "100vh"}}></div> */}

			<h1>Projects</h1>

			{/* <h2>Featured</h2> */}

			<Project
			name="This Website"
			link="https://github.com/Dot32IsCool/dot32.dev-v5"
			image="/images/project_list_minified/Screenshot_2023-06-24_at_11.23.44.webp"
			tags={["Website"]}
			description="Star it on GitHub!"
			/>

			<Project
			name="Discord Timestamp Generator"
			link="https://discordtimestampgenerator.netlify.app/"
			image="/images/project_list_minified/Screen_Shot_2021-12-10_at_14.20.21.webp"
			tags={["Website"]}
			description="Generate relative timestamps that you can paste into Discord chat"
			/>

			<Project
			name="Tiny Tank"
			link="https://dot32.itch.io/tiny-tank"
			image="/images/project_list/tinytankthumb.png"
			tags={["Windows", "MacOS"]}
			description="Fight your way through a series of levels with intelligent AI and try not to die in this top down shooter!"
			/>

			<h2>Recent <span>(Last updated 26th Nov 2023)</span></h2>

			<Project
			name="Auto Undiscord"
			link="https://github.com/Dot32IsCool/auto_undiscord"
			image="/images/project_list_minified/undiscord_project.webp"
			tags={["Requires Rust compiler"]}
			description="Automatically replaces a website's images hosted on Discord's CDN by downloading them and updating the source code."
			/>

			<Project
			name="Assembly Clock"
			link="https://github.com/Dot32IsCool/assembly-clock"
			image="/images/project_list_minified/assembly_project.webp"
			tags={["Assembly", "DOS"]}
			description="A mock 12 hour clock written in 8086 assembly"
			/>

			<Project
			name="2D Planet Generator"
			link="https://github.com/Dot32IsCool/planet_gen"
			image="/images/project_list_minified/planet_project.webp"
			tags={["Requires Rust compiler"]}
			description="Built from my Marching Squares project"
			/>
			
			<Project
			name="Marching Squares"
			link="https://github.com/Dot32IsCool/marching_squares"
			image="/images/project_list_minified/Screenshot_2023-07-20_at_11.04.13.webp"
			tags={["Requires Rust compiler"]}
			description="Marching squares in Bevy, written in an afternoon"
			/>

			<Project
			name="Ui Synthesizer"
			link="https://github.com/Dot32IsCool/ui_synth"
			image="/images/project_list_minified/Screenshot_2023-03-09_at_12.50.46.webp"
			tags={["Requires Rust compiler"]}
			description="A UI for my Rodio Synthesizer - MIDI keyboard not required!"
			/>

			{/* <Project
			name="Rodio Synthesizer"
			link="https://github.com/Dot32IsCool/rodio-synth"
			image="/images/project_list_minified/Screenshot_2023-03-08_at_20.13.16.webp"
			tags={["Requires Rust compiler and a MIDI keyboard"]}
			description="A synthesizer written in Rust using the Rodio library, supporting envelopes and polyphony."
			/> */}

			<Project
			name="Discord Timezone Generator"
			link="https://discordtimezonegenerator.netlify.app/"
			image="/images/project_list_minified/timezonethumb.webp"
			tags={["Website"]}
			description="Show your timezone in your Discord profile for others to see!"
			/>

			<Project
			name="Gui Repo List"
			link="https://github.com/Dot32IsCool/gui_repo_list"
			image="/images/project_list_minified/Screenshot_2023-02-04_at_18.45.10.webp"
			tags={["Rust compiler required"]}
			description="View how many stars your repos have in a GUI application written with Iced"
			/>

			<Project
			name="Timer bot V2"
			link="https://discord.com/api/oauth2/authorize?client_id=1040831863381557321&permissions=277025392640&scope=bot%20applications.commands"
			image="https://user-images.githubusercontent.com/61964090/216919656-9b860a81-ba00-47e2-ae32-5a626b3dfed6.png"
			tags={["Discord bot"]}
			description="The original timer bot, rewritten to use slash commands!"
			/>

			{/* <Project
			name="Pullboy"
			link="https://github.com/Dot32IsCool/pullboy"
			image="/images/project_list_minified/Screenshot_2023-02-04_at_18.36.39.webp"
			tags={["Shell script"]}
			description="Automatically pulls changes and redeployes a Node project when a git repo is updated"
			/> */}

			<Project
			name="Draggable List"
			link="https://github.com/Dot32IsCool/dragable-list"
			image="https://user-images.githubusercontent.com/61964090/216762179-2765c536-db6d-4059-8231-26ba95ed1d4b.png"
			tags={["Website"]}
			description="A list that can be rearanged by dragging its items"
			/>

			<Project
			name="New Connect 4"
			link="https://github.com/Dot32IsCool/new_connect_four"
			image="/images/project_list_minified/Screenshot_2023-02-04_at_18.26.15.webp"
			tags={["Rust compiler required"]}
			description="A rewrite of my Rust connect 4 game, but this time with much more experience and a better understanding of Rust"
			/>

			<Project
			name="Just a clock"
			link="https://just-a-clock.netlify.app/"
			image="https://user-images.githubusercontent.com/61964090/198535612-8794fa4c-4b82-4aed-b248-6ad35f7072d9.png"
			tags={["Website"]}
			description="Just a minimalistic clock"
			/>

			<Project
			name="Wave Function Collapse"
			link="https://github.com/Dot32IsCool/wave_function_collapse"
			image="/images/project_list_minified/Screen_Shot_2022-10-30_at_15.54.20.webp"
			tags={["Rust compiler required"]}
			description="A CLI WFC demo written in Rust 🦀"
			/>

			<Project
			name="Bevy Tiny Tank clone"
			link="https://github.com/Dot32IsCool/bevy-moving-circle"
			image="/images/project_list_minified/Screen_Shot_2022-08-20_at_11.52.38.webp"
			tags={["Rust compiler required"]}
			description="A half fetaured recreation of my Love2D Tiny Tank game"
			/>

			<Project
			name="My intro (Rust edition)"
			link="https://github.com/Dot32IsCool/dot32-intro-rs"
			image="/images/project_list_minified/Screen_Shot_2022-05-17_at_18.44.55.webp"
			tags={["Rust compiler required"]}
			description="My classic Love2D intro rewritten with rust and bevy"
			/>

			<Project
			name="Timer bot"
			link="https://discord.com/api/oauth2/authorize?client_id=927501769272094720&permissions=274877991936&scope=bot"
			image="/images/project_list_minified/Screen_Shot_2022-01-04_at_17.46.06.webp"
			tags={["Discord bot"]}
			description="A simple bot that can create timers within  discord, based of my discord timestamp generator website"
			/>

			<Project
			name="Connect 4"
			link="https://github.com/Dot32IsCool/comand-line-connect-4"
			image="/images/project_list_minified/Screen_Shot_2022-01-04_at_17.37.30.webp"
			tags={["Rust compiler required"]}
			description="A command-line-interface version of the popular connect 4 game, complete with animations for dropping every piece 👌"
			/>

			<Project
			name="Norwegian number practice"
			link="https://github.com/Dot32IsCool/norwegian-numbers"
			image="/images/project_list_minified/Screen_Shot_2021-12-08_at_17.02.01.webp"
			tags={["Rust compiler required"]}
			description="Learn how to count in Norwegian; although this project was primarily just an excuse to use Rust 😎 🦀"
			/>

			<Project
			name="Procedural animation with inverse kinematics"
			link="https://github.com/Dot32IsCool/platformer"
			image="/images/project_list_minified/Screen_Shot_2021-12-07_at_18.06.27.webp"
			tags={["Love2D required"]}
			description="A platformer demo with procedural animation"
			/>

			<Project
			name="Custom ball physics engine"
			link="https://github.com/Dot32IsCool/ball-physics-engine"
			image="/images/project_list_minified/Screen_Shot_2021-11-06_at_9.19.19_am.webp"
			tags={["Love2D required"]}
			description="Custom physics engine built on verlet integration"
			/>

			<Project
			name="3D engine in Love2D"
			link="https://github.com/Dot32IsCool/3D-in-love2D"
			image="https://user-images.githubusercontent.com/61964090/127146335-16ba2a76-f36b-4096-8545-b18322c615cc.png"
			tags={["Love2D required"]}
			description="Basic 3D engine using a custom shader and depth buffer"
			/>

			<Project
			name="Count Lines"
			link="https://github.com/Dot32IsCool/count-lines"
			image="https://user-images.githubusercontent.com/61964090/123012218-7696b000-d3f4-11eb-8555-2cbff6a57586.png"
			tags={["Nim compiler required"]}
			description="Will automatically count how many lines of (Lua) sourcecode is in a folder"
			/>

			<Project
			name="Italian Number Practice"
			link="https://github.com/Dot32IsCool/italian-numbers"
			image="https://user-images.githubusercontent.com/61964090/123534049-b2ab7700-d74c-11eb-8888-3e9799c9cb45.png"
			tags={["Nim compiler required"]}
			description="Will quiz you on your knowlage of Italian numbers"
			/>

			<Project
			name="Quick and simple platformer"
			link="https://github.com/Dot32IsCool/QuickAndSimplePlatformer-Game"
			image="/images/project_list_minified/qspthumb.webp"
			tags={["Windows, MacOS"]}
			description="Contrary to the name, most people take a while to finish due to the janky physics. Nevertheless, this game has speedrunning potential"
			/>  

			<p> Also see my <a href="https://github.com/Dot32Dev">Github</a> for more projects </p>
		</div>
	)
}
