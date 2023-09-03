// import useDocumentTitle from './useDocumentTitle'
import { Helmet } from 'react-helmet';
import {useRef, useEffect} from 'react';

export default function ProjectList(props) {
	// useDocumentTitle('Dot32')
	
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
			<Helmet>
				<title>Dot32</title>
				<meta name="description" content="I am Dot32, a passionate programmer from Western Australia."/>
				
				<meta property="og:title" content="Dot32 dev" />
				{/* <meta property="og:image" content="https://cdn.discordapp.com/attachments/577832597686583310/1134040308745769011/Dot32_Graffiti3.png" /> */}
				<meta property="og:description" content="I am Dot32, a passionate programmer from Western Australia." />
				<meta name="author" content="Dot32"/>
			</Helmet>

			<p className="large-text top" ref={(el) => (animate.current[0] = el)}>Hi there, I'm <span>Dot32</span></p>
			<div className="video-container" ref={vid}>
				<video controls autoPlay muted playsInline loop>
					<source src="/gradientlogo.webm" />
				</video>
				{/* <video autoPlay muted playsInline loop>
					<source src="/gradientlogo.webm" />
				</video> */}
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
