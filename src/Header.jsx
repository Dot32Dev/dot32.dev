// import './Header.css'
import { Link } from 'react-router-dom'

export default function Project() {
	return (
		<div className="header-container">
		<header>
			<nav>
				<ul>
					<li><Link to="/"><img src="/white logo.png" style={{display: 'inline', margin: 0,width: '1em'}}/><p>Dot32</p></Link></li>
					<li><Link to="/projects">Projects</Link></li>
					<li><Link to="/tutorials">Tutorials</Link></li>
					{/* <li><Link to="/about">About</Link></li> */}
				</ul>
			</nav>
			<a href="" className="cta">Join my Discord</a>
		</header>
	</div>
	)
}