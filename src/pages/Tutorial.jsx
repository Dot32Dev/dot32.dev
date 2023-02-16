import { useParams } from 'react-router-dom'

export default function Tutorial(props) {
	const { id } = useParams()
	return (
		<div className="projectList">
			<h1>{id}</h1>
		</div>
	)
}