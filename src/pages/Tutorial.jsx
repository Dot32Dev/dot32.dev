import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import "highlight.js/styles/atom-one-dark.css";
import hljs from "highlight.js";

export default function Tutorial(props) {
	const { id } = useParams()
	const [markdown, setMarkdown] = useState("");

	useEffect(() => {
		fetch(`/tutorials/${id}/index.md`) 
			.then((res) => res.text())
			.then((text) => {
				setMarkdown(text);
				hljs.highlightAll();
			});
	}, []);

	return (
		<div className="tutorial">
			<br/>
			<br/>
			<br/>
			
			<ReactMarkdown>{markdown}</ReactMarkdown>
		</div>
	)
}