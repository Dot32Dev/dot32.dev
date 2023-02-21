import useDocumentTitle from './useDocumentTitle'
import {useRef, useEffect} from 'react';

export default function ProjectList(props) {
	const ref = useRef(null);
	useDocumentTitle('Dot32')

	useEffect(() => {
		// Get the video element
		const video = ref.current;
		// Add a class to the video when it is loaded
		video.onloadeddata = function() { // first frame has loaded
			video.classList.add("animate");
		}
	}, []);

	return (
		<div className="projectList">
			<p className="large-text">Hi there, I'm <span>Dot32</span></p>
			<video autoPlay muted playsInline loop ref={ref}>
				<source src="/gradientlogo.webm" />
			</video>
			<p className="large-text sub"><span>[ RUSTACIAN + WEBDEV ]</span></p>
		</div>
	)
}