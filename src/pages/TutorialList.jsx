import useDocumentTitle from './useDocumentTitle'
import Project from '../Project'

export default function TutorialList(props) {
	useDocumentTitle('Tutorials')
	return (
		<div className="projectList">
			<br/>
			<br/>
			<br/>
			
			<h1>Tutorials</h1>

			<Project
			name="Writing a physics engine to prove it's easy"
			link="/tutorials/writing-a-physics-engine-to-prove-its-not-hard"
			image="/tutorials/writing-a-physics-engine-to-prove-its-not-hard/thumb.gif"
			tags="Lua"
			description="A tutorial on how to write a custom physics engine"
			/>

			<Project
			name="Circle versus rectangle collision"
			link="/tutorials/circle-vs-rectangle-collision"
			image="/tutorials/circle-vs-rectangle-collision/thumb.gif"
			tags="Lua"
			description="How to detect interception between circles and rectangles."
			/>

			<Project
			name="How to build custom auto tilling"
			link="/tutorials/auto-tilling"
			image="/tutorials/auto-tilling/thumb.gif"
			tags="Lua"
			description="It's not as hard as you might think!"
			/>
			
		</div>
	)
}