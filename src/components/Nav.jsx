import React from "react";

const Nav = (props) => {
	return (
		<nav className="my-5 py-5 mx-5">
			<h1 className="font-bold text-center text-8xl">
				{props.title}
			</h1>
		</nav>
	);
};

export default Nav;
