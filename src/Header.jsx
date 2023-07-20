// import './Header.css'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';

const pages = ["/", "/projects", "/tutorials", "/about"];

export default function Project() {
	return (
		<div className="header-container">
		<header>
			<nav>
				<ul>
					<li><AnimatedLink to="/"><img src="/white logo.png" alt="home icon" style={{display: 'inline', margin: 0,width: '1em'}}/><p>Dot32</p></AnimatedLink></li>
					<li><AnimatedLink to="/projects">Projects</AnimatedLink></li>
					<li><AnimatedLink to="/tutorials">Tutorials</AnimatedLink></li>
					{/* <li><Link to="/about">About</Link></li> */}
				</ul>
			</nav>
			<a href="https://discord.gg/Pswb8khdgQ" className="cta">Join my Discord</a>
		</header>
	</div>
	)
}

const AnimatedLink = ({ to, children }) => {
	const navigate = useNavigate();
  
	return (
	  <a
		href={to}
		onClick={async (ev) => {
		  ev.preventDefault();
		//   document.startViewTransition(() => {
		// 	navigate(to);
		//   });
			if (document.startViewTransition) {
				// Check if the page is in the list of pages and if it is record the index
				const index = pages.indexOf(to);
				// If the page is in the list of pages
				if (index !== -1) {
					// Get currently active page from the list of pages and if it is record the index
					const activeIndex = pages.indexOf(window.location.pathname);
					// If the active page is in the list of pages
					// if (activeIndex !== -1) {
					if (activeIndex == -1) {
						// If the active page titles includes tutorial
						if (window.location.pathname.includes('tutorial')) {
							// Make the page slide in from the left
							document.documentElement.classList.add('back-transition');
						}
					}

					// If the active page index is greater than the page index
					if (activeIndex > index) {
						// Make the page slide in from the left
						document.documentElement.classList.add('back-transition');
					}

					if (activeIndex !== index) {
						// Start the transition
						const transition = document.startViewTransition(() => {
							navigate(to);
						});

						try {
							await transition.finished;
						} finally {
							document.documentElement.classList.remove('back-transition');
						}
					}
					// } else {
					// 	navigate(to);
					// }
				}
			} else {
				navigate(to);
			}
		}}
	  >
		{children}
	  </a>
	);
  };
  