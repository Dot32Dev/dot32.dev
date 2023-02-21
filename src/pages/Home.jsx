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
			<video autoPlay muted playsInline loop ref={ref}>
				<source src="/gradientlogo.webm" />
			</video>
		</div>
	)
}