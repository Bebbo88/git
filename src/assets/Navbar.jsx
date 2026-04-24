import React from "react";

const Navbar = () => {
	return (
		<nav
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "12px 20px",
				background: "#0f172a",
				color: "#e2e8f0",
				fontFamily: "Arial, sans-serif",
			}}
		>
			<div style={{ fontWeight: 700, fontSize: "1.1rem" }}>Git Team Learning</div>

			<ul
				style={{
					listStyle: "none",
					display: "flex",
					gap: "18px",
					margin: 0,
					padding: 0,
				}}
			>
				<li><a href="#basics" style={{ color: "#e2e8f0", textDecoration: "none" }}>Basics</a></li>
				<li><a href="#branches" style={{ color: "#e2e8f0", textDecoration: "none" }}>Branches</a></li>
				<li><a href="#workflow" style={{ color: "#e2e8f0", textDecoration: "none" }}>Workflow</a></li>
				<li><a href="#team" style={{ color: "#e2e8f0", textDecoration: "none" }}>Team Rules</a></li>
			</ul>

			<button
				style={{
					background: "#22c55e",
					color: "#052e16",
					border: "none",
					borderRadius: "6px",
					padding: "8px 12px",
					fontWeight: 600,
					cursor: "pointer",
				}}
			>
				Start Session
			</button>
		</nav>
	);
};

export default Navbar;
