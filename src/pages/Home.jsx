import useDocumentTitle from './useDocumentTitle'
import {useRef, useEffect} from 'react';

export default function ProjectList(props) {
	useDocumentTitle('Dot32')
	
	const vid = useRef(null);
	const animate = useRef([]);

	useEffect(() => {
		// Get the video-container element
		const video_container = vid.current;
		// Get the video element
		const video = video_container.querySelector("video");
		// Get the elements marked for animation
		const elements = animate.current;
		console.log(elements);
		// When the video is loaded, add the animate class to the video container and the elements marked for animation
		video.onloadeddata = function() { // first frame has loaded
			video_container.classList.add("animate");
			elements.forEach(element => {
				element.classList.add("animate");
			});
		}
	}, []);

	return (
		<div className="home" >
			<p className="large-text top" ref={(el) => (animate.current[0] = el)}>Hi there, I'm <span>Dot32</span></p>
			<div className="video-container" ref={vid}>
				<video autoPlay muted playsInline loop>
					<source src="/gradientlogo.webm" />
				</video>
			</div>
			{/* <br/>
			<br/>
			<br/> */}
			<p className="large-text sub" ref={(el) => (animate.current[1] = el)}><span>[ RUSTACEAN + WEBDEV ]</span></p>
			{/* <br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/> */}
		</div>
	)
}