import useDocumentTitle from './useDocumentTitle'
import {useRef, useEffect} from 'react';

export default function ProjectList(props) {
	const ref = useRef(null);
	useDocumentTitle('Dot32')

	useEffect(() => {
		// Get the video-container element
		const video_container = ref.current;
		// Get the video element
		const video = video_container.querySelector("video");
		// Add a class to the video-container when it is loaded
		video.onloadeddata = function() { // first frame has loaded
			video_container.classList.add("animate");
		}
	}, []);

	return (
		<div className="projectList">
			<p className="large-text">Hi there, I'm <span>Dot32</span></p>
			<div className="video-container" ref={ref}>
				<video autoPlay muted playsInline loop>
					<source src="/gradientlogo.webm" />
				</video>
			</div>
			<br/>
			<br/>
			<p className="large-text sub"><span>[ RUSTACIAN + WEBDEV ]</span></p>
		</div>
	)
}