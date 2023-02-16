import Project from '../Project'

export default function TutorialList(props) {
	return (
		<div className="projectList">
			<br/>
			<br/>
			<br/>
			
			{/* <h2>Featured</h2> */}

			<Project
			name="Circle versus rectangle collision"
			link="/tutorials/circle-vs-rectangle-collision"
			image="https://dot32.dev/tutorials/circle-vs-rectangle-collision/thumb.gif"
			tags="Lua"
			description="How to detect interception between circles and rectangles."
			/>

			<Project
			name="How to build custom auto tilling"
			link="/tutorials/auto-tilling"
			image="https://dot32.dev/tutorials/auto-tilling/thumb.gif"
			tags="Lua"
			description="It's not as hard as you might think!"
			/>
			
		</div>
	)
}