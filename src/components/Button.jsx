import React from "react";

const Button = (props) => {
	return (
		<button
			onClick={props.onClick}
			className={`
      bg-slate-700 text-neutral-300 cursor-pointer flex items-center justify-center text-lg gap-2 font-medium active:bg-slate-600 transition duration-100
      ${props.iconOnly ? "rounded-full p-3" : "rounded-md px-3 py-2"}
      `}>
			{props.children}
		</button>
	);
};

export default Button;
