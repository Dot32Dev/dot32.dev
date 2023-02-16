import './Project.css'
import { Link } from 'react-router-dom'

export default function Project(props) {
	// if props.link is external
	if (props.link.startsWith("http")) {
		return (
			<div className="project">
				<a href={props.link} target="_blank">
					<img src={props.image}/>
				</a>
				<div>
					<a href={props.link} target="_blank">
						<h2>{props.name} <span className="fas fa-external-link-alt"/></h2>
					</a>
					<span className="tag">{props.tags}</span>
					<p>{props.description}</p>
				</div>
			</div>
		)
	} else {
		return (
			<div className="project">
				<Link to={props.link}>
					<img src={props.image}/>
				</Link>
				<div>
					<Link to={props.link}>
						<h2>{props.name} <span className="fas fa-external-link-alt"/></h2>
					</Link>
					<span className="tag">{props.tags}</span>
					<p>{props.description}</p>
				</div>
			</div>
		)
	}
}