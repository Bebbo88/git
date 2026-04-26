import React, { useState } from "react";

const faqs = [
	{
		question: "What is this project about?",
		answer:
			"This project helps us practice Git, GitHub, React, and front-end development basics.",
	},
	{
		question: "Why are we learning Git and GitHub?",
		answer:
			"Git and GitHub help us track code changes, collaborate with others, and manage project history.",
	},
	{
		question: "Why are we using React?",
		answer:
			"React helps us build reusable UI components and create interactive web pages faster.",
	},
	{
		question: "What front-end topics are included?",
		answer:
			"We focus on HTML, CSS, JavaScript, React components, state, and basic UI structure.",
	},
	{
		question: "How can I contribute to this project?",
		answer:
			"Create a branch, make your changes, commit them clearly, and open a pull request on GitHub.",
	},
];

export default function FAQSection() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section style={{ maxWidth: "800px", margin: "40px auto", padding: "0 16px" }}>
			<h2 style={{ fontSize: "2rem", marginBottom: "8px" }}>FAQ Section</h2>
			<p style={{ color: "#555", marginBottom: "24px" }}>
				Common questions about our learning project (Git, GitHub, React, and Front-End).
			</p>

			<div>
				{faqs.map((item, index) => {
					const isOpen = openIndex === index;

					return (
						<article
							key={item.question}
							style={{
								border: "1px solid #ddd",
								borderRadius: "10px",
								marginBottom: "12px",
								overflow: "hidden",
							}}
						>
							<button
								onClick={() => toggleFAQ(index)}
								style={{
									width: "100%",
									textAlign: "left",
									padding: "14px 16px",
									background: "#f9f9f9",
									border: "none",
									cursor: "pointer",
									fontSize: "1rem",
									fontWeight: 600,
								}}
								aria-expanded={isOpen}
								aria-controls={`faq-answer-${index}`}
							>
								{item.question}
							</button>

							{isOpen && (
								<div
									id={`faq-answer-${index}`}
									style={{ padding: "12px 16px", background: "#fff", color: "#333" }}
								>
									{item.answer}
								</div>
							)}
						</article>
					);
				})}
			</div>
			<div style={{ marginTop: "20px", paddingTop: "12px", borderTop: "1px solid #eee" }}>
				<p style={{ margin: 0, color: "#666", fontSize: "0.9rem" }}>Signature</p>
				<h6 style={{ marginTop: "6px", color: "#222", fontStyle: "italic", fontSize: "1rem" }}>
					Saeed Ghanem
				</h6>
			</div>
		</section>
	);
}
