import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function Tutorial(props) {
	const { id } = useParams()
	const [markdown, setMarkdown] = useState("");

	useEffect(() => {
		fetch(`/src/pages/tutorials/${id}.md`) 
			.then((res) => res.text())
			.then((text) => setMarkdown(text));
	}, []);

	return (
		<div className="projectList">
			<ReactMarkdown>{markdown}</ReactMarkdown>
		</div>
	)
}