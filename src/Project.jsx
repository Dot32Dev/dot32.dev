import './Project.css'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';

export default function Project(props) {
	// Check if 'project_list_minified' is present in the image URL
	const isMinified = props.image.includes('project_list_minified');
  
	// Define the non-minified image URL if minified is present
	let originalImage = isMinified ? props.image.replace('project_list_minified', 'project_list') : props.image;

	// Replace '.webp' with '.png' in the original image URL
	originalImage = originalImage.replace('.webp', '.png');

	if (props.link.startsWith("http")) {
		return (
			<div className="project">
				<a href={props.link} target="_blank">
					{isMinified ? (
						<picture>
						<source 
							media="(orientation: portrait)"
							srcSet={originalImage} />
						<source 
							media="(orientation: landscape)"
							srcSet={props.image} />
						<img src={props.image} loading="lazy" alt="image" />
						</picture>
					) : (
						<img src={props.image} loading="lazy" alt="image" />
					)}
				</a>
				<div>
					<a href={props.link} target="_blank">
						<h2>{props.name} <span className="fas fa-external-link-alt"/></h2>
					</a>
					<div className='tags-wrapper-or-whatever'>
						{props.tags.map((i, index) => (
							<span key={index} className='tag'>{i}</span>
						))}
					</div>
					<p>{props.description}</p>
				</div>
			</div>
		)
	} else {
		return (
			<div className="project">
				<AnimatedLink to={props.link}>
					<img src={props.image} loading="lazy" />
				</AnimatedLink>
				<div>
					<AnimatedLink to={props.link}>
						<h2>{props.name} <span className="fas fa-external-link-alt"/></h2>
					</AnimatedLink>
					<div className='tags-wrapper-or-whatever'>
						{props.tags.map((i, index) => (
							<span key={index} className='tag'>{i}</span>
						))}
					</div>
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