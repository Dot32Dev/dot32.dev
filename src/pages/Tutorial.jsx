import useDocumentTitle from './useDocumentTitle'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
// import html from 'remark-html'
import rehypeRaw from 'rehype-raw'

import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js";

export default function Tutorial(props) {
	const { id } = useParams()
	const [markdown, setMarkdown] = useState("");
	const [h2Headings, setH2Headings] = useState([]);
	// const isReady = markdown !== "";

	// Set title to contents of first h1
	useDocumentTitle(markdown.split("\n")[0].replace("# ", ""))

	useEffect(() => {
		fetch(`/tutorials/${id}/index.md`) 
		.then((res) => res.text())
		.then((text) => {
			setMarkdown(text);
			console.log("markdown fetch")
		});
	}, []);
		
	useEffect(() => {
		hljs.highlightAll();
		// console.log("highlighted")
	}, [markdown]);

	useEffect(() => {
		// Get the h1 element
		const h1Element = document.querySelector(".tutorial h1");
		// Remove it and append it to the tutorial div's parent
		// h1Element.parentNode.removeChild(h1Element);
		// Get .tutorial's parent
		// const parent = document.querySelector(".tutorial").parentNode;
		// Insert the h1 element at the beginning of the parent
		// parent.insertBefore(h1Element, parent.firstChild);
		if (h1Element) { 
			h1Element.parentNode.removeChild(h1Element);
			h1Element.classList.add("tutorial-title");
			const parent = document.querySelector(".tutorial").parentNode;
			parent.insertBefore(h1Element, parent.firstChild);

			// // Get the contents list h3
			// const contentsHeading = document.querySelector(".contents h3");
			// // Set its text content to the h1 element's text content
			// contentsHeading.textContent = h1Element.textContent;
		}

		// Get all h2 headings
		const h2Elements = document.querySelectorAll(".tutorial h2");
		// Set the id of each h2 element to its text content
		h2Elements.forEach((heading) => {
			const id = heading.textContent.toLowerCase().replace(/\s+/g, '-');
			heading.id = id;
			console.log(heading.getBoundingClientRect().top);
		});

		// Extract the text content of each h2 element and store in an array
		const headings = Array.from(h2Elements).map((heading) => heading.textContent);
		// Update the state variable with the extracted headings
		setH2Headings(headings);
		console.log(headings)
	}, [markdown]);

	useEffect(() => {
		window.addEventListener('scroll', (event) => {
			const anchors = document.querySelectorAll('h2');
			const links = document.querySelectorAll('.contents > ul > li');

			if (typeof(anchors) != 'undefined' && anchors != null && typeof(links) != 'undefined' && links != null) {
			  let scrollTop = window.scrollY;
			  
			  // highlight the last scrolled-to: set everything inactive first
			//   links.forEach((link, index) => {
			// 	link.classList.remove("active");
			//   });

				let activeIndex = 0;
				// then iterate backwards, on the first match highlight it and break
				for (var i = anchors.length-1; i >= 0; i--) {
					if (scrollTop > anchors[i].offsetTop - 75) {
					//   links[i].classList.add('active');
						activeIndex = i;
						break;
					}
				}

				for (var i = 0; i < links.length; i++) {
					if (i == activeIndex) {
						links[i].classList.add('active');
					} else {
						links[i].classList.remove('active');
					}
				}
			}
			// for (let i = 0; i < anchors.length; i++) {
			// 	console.log(anchors[i].getBoundingClientRect().top + anchors[i].innerHTML)
			// 	// anchors[i].classList.remove('active');/
			// }
		  });
	}, []);

	return (
		<div>
			{/* <br/>
			<br/>
			<br/> */}
			{markdown !== ""? (
				<div className='contents-fixed'>
					{h2Headings.length > 0? (
					<div className='contents-container'>
							<div className='contents'>
								<h3>Contents</h3>
								<ul>
									{h2Headings.map((heading, index) => (
									<li key={index}>
										<a href={`#${heading.toLowerCase().replace(/\s+/g, '-')}`}>{heading}</a>
									</li>
									))}
								</ul>
							</div>
					</div>
						): null}
					<div className='contents-container'>
						<div className="contents">
							<h3>Have any questions?</h3>
							<p>Join the <a href="https://discord.gg/Pswb8khdgQ">Discord Server!</a></p>
							{/* <p>Noticed a spelling mistake?</p> */}
							<p>Noticed a spelling mistake?<br/><a href="https://github.com/Dot32IsCool/dot32.dev-v5/tree/main/public/tutorials">Submit a PR</a> or <a href="https://github.com/Dot32IsCool/dot32.dev-v5/issues/new">open an issue.</a></p>
						</div>
					</div>
				</div>
			): null}
			<div className="tutorial">
				<ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>

				{/* <ReactMarkdown
					// children={markdown}
					// renderers={{
					// heading: ({ level, children }) => {
					// 	// Generate a unique id based on the heading content
					// 	const id = children.map((child) => child.props.value.toLowerCase()).join('-');
					// 	// Adjust the 'level' prop to create nested headings correctly
					// 	const Tag = `h${level + 1}`;
					// 	return <Tag id={id}>{children}</Tag>;
					// },
					// }}
					components={{
						heading: ({ level, children }) => {
							// Generate a unique id based on the heading content
							const id = children.map((child) => child.props.value.toLowerCase()).join('-');
							console.log("i was here")
							// Adjust the 'level' prop to create nested headings correctly
							const Tag = `h${level + 1}`;
							return <Tag id={id}>{children}</Tag>;
						}
					}}
				>markdown</ReactMarkdown> */}

				{/* {isReady ? (
					<ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
				) : (
					<img src="/tutorials/circle-vs-rectangle-collision/thumb.gif" alt="Loading..." className='thumbgif' />
				)} */}
				{/* <img src="/tutorials/circle-vs-rectangle-collision/thumb.gif" alt="Loading..." className='thumbgif' /> */}

				{/* <hr/> */}
				{/* <br/> */}
				{/* <p>Have any questions? Join the <a href="https://discord.gg/Pswb8khdgQ"><img src="https://img.shields.io/discord/922185010205822976?color=5865F2&label=discord&style=for-the-badge"/></a></p> */}
				{/* <a className="action discord" href="https://discord.gg/Pswb8khdgQ">Have any questions? Join the Discord Server</a>
				<a className="action github" href="https://github.com/Dot32IsCool/dot32.dev-v5/tree/main/public/tutorials">Notice a spelling mistake? Submit a PR</a> */}

				{/* <br/>
				<br/>
				<br/> */}
			</div>
		</div>
	)
}