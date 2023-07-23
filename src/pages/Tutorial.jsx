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
	}, [markdown]);
		
	useEffect(() => {
		hljs.highlightAll();
		// console.log("highlighted")
	}, [markdown]);

	useEffect(() => {
		// Get all h2 headings
		const h2Elements = document.querySelectorAll(".tutorial h2");
		// Set the id of each h2 element to its text content
		h2Elements.forEach((heading) => {
			const id = heading.textContent.toLowerCase().replace(/\s+/g, '-');
			heading.id = id;
		});

		// Extract the text content of each h2 element and store in an array
		const headings = Array.from(h2Elements).map((heading) => heading.textContent);
		// Update the state variable with the extracted headings
		setH2Headings(headings);
		console.log(headings)
	}, [markdown]);

	return (
		<div>
			<br/>
			<br/>
			<br/>
			{markdown !== ""? (
				<div className='contents-fixed'>
					<div className='contents-container'>
						<div className='contents'>
							<h2>Table of Contents</h2>
							<ul>
								{h2Headings.map((heading, index) => (
								<li key={index}>
									<a href={`#${heading.toLowerCase().replace(/\s+/g, '-')}`}>{heading}</a>
								</li>
								))}
							</ul>
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

				{/* <hr/>

				<p>Have any questions? Join the <a className="cta" href="https://discord.gg/Pswb8khdgQ">Discord server</a></p> */}
			</div>
		</div>
	)
}