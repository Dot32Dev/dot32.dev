export default function Project(props) {
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
}