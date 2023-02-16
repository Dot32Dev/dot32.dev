import useDocumentTitle from './useDocumentTitle'

export default function NotFound(props) {
	useDocumentTitle('404')
	return (
		<div className="projectList">
			<h1>404 not found</h1>
			<p>This page doesnt exist yet</p>
		</div>
	)
}