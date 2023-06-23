// import './Header.css'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom';

export default function Project() {
	return (
		<div className="header-container">
		<header>
			<nav>
				<ul>
					<li><AnimatedLink to="/"><img src="/white logo.png" style={{display: 'inline', margin: 0,width: '1em'}}/><p>Dot32</p></AnimatedLink></li>
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
		onClick={(ev) => {
		  ev.preventDefault();
		//   document.startViewTransition(() => {
		// 	navigate(to);
		//   });
			if (document.startViewTransition) {
				document.startViewTransition(() => {
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
  