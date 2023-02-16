import Project from '../Project'

export default function TutorialList(props) {
	return (
		<div className="projectList">
			<br/>
			<br/>
			<br/>
			
			{/* <h2>Featured</h2> */}

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
			
		</div>
	)
}