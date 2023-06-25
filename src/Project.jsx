import './Project.css'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';

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
				<AnimatedLink to={props.link}>
					<img src={props.image}/>
				</AnimatedLink>
				<div>
					<AnimatedLink to={props.link}>
						<h2>{props.name} <span className="fas fa-external-link-alt"/></h2>
					</AnimatedLink>
					<span className="tag">{props.tags}</span>
					<p>{props.description}</p>
				</div>
			</div>
		)
	}
}

const AnimatedLink = ({ to, children }) => {
	const navigate = useNavigate();
  
	return (
	  <a
		href={to}
		onClick={(ev) => {
		  ev.preventDefault();
			if (document.startViewTransition) {
				// // ev.target.viewTransitionName = 'thumbnail_gif';
				// // Find the parent "project" div
				// const parent = ev.currentTarget.closest('.project');
				// // Find the image
				// const image = parent.querySelector('img');
				// // If the image exists
				// if (image) {
				// 	// Set the view transition name
				// 	image.style.viewTransitionName = 'thumbnail_gif';
				// }

				document.startViewTransition(() => {
					// if (image) {
					// 	image.style.viewTransitionName = '';
					// }
					navigate(to);
				});
			} else {
				navigate(to);
			}
		}}
	  >
		{children}
	  </a>
	);
  };