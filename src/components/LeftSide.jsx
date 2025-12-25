const Leftside = ({ filter, setFilter }) => {
	return (
		<>
			<aside className="relative flex flex-col gap-5 pr-10 after:absolute after:border-2 after:right-0 after:h-45">
				<h2
					onClick={() => setFilter("all")}
					className={`text-3xl font-semibold cursor-pointer transition-opacity duration-300	
					${filter === "all" ? "" : "opacity-50"}`}>
					All Tasks
				</h2>
				<h2
					onClick={() => setFilter("pending")}
					className={`text-3xl font-semibold cursor-pointer transition-opacity duration-300	
					${filter === "pending" ? "" : "opacity-50"}`}>
					Pending
				</h2>
				<h2
					onClick={() => setFilter("completed")}
					className={`text-3xl font-semibold cursor-pointer transition-opacity duration-300	
					${filter === "completed" ? "" : "opacity-50"}`}>
					Completed
				</h2>
			</aside>
		</>
	);
};

export default Leftside;
