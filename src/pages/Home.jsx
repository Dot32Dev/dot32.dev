import useDocumentTitle from './useDocumentTitle'

export default function ProjectList(props) {
	useDocumentTitle('Dot32')
	return (
		<div className="projectList">
			<video autoPlay muted playsInline loop>
				<source src="/gradientlogo.webm" />
			</video>
		</div>
	)
}