// import useDocumentTitle from './useDocumentTitle'
import { Helmet } from 'react-helmet';
import Project from '../Project'

export default function TutorialList(props) {
	// useDocumentTitle('Tutorials')
	return (
		<div className="projectList">
			<Helmet>
				<title>Tutorials</title>
				<meta name="description" content="Check out my tutorials!"/>
				
				<meta property="og:title" content="Tutorials - Dot32 dev" />
				{/* <meta property="og:image" content="/images/Dot32_Graffiti3.png" /> */}
				<meta property="og:description" content="Check out my tutorials!" />
				<meta name="author" content="Dot32"/>
			</Helmet>

			<br/>
			<br/>
			<br/>
			
			<h1>Tutorials</h1>

			<Project
			name="Writing a physics engine to prove it's easy"
			link="/tutorials/writing-a-physics-engine-to-prove-its-not-hard"
			image="/tutorials/writing-a-physics-engine-to-prove-its-not-hard/thumb.gif"
			tags={["Lua", "22nd Jul 2023"]}
			description="A tutorial on how to write a custom physics engine."
			/>

			<Project
			name="Circle versus rectangle collision"
			link="/tutorials/circle-vs-rectangle-collision"
			image="/tutorials/circle-vs-rectangle-collision/thumb.gif"
			tags={["Lua", "18th Jan 2021"]}
			description="How to detect interception between circles and rectangles."
			/>

			<Project
			name="How to build custom auto tilling"
			link="/tutorials/auto-tilling"
			image="/tutorials/auto-tilling/thumb.gif"
			tags={["Lua", "18th Jan 2021"]}
			description="It's not as hard as you might think!"
			/>
			
		</div>
	)
}
