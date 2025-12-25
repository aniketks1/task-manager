import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Main = ({ tasks, onToggleTask, deleteTask, filter, setFilter }) => {
	return (
		<main className="mx-auto my-5 px-5 py-5 flex gap-10 flex-1 min-h-0 w-full max-w-7xl">
			<LeftSide filter={filter} setFilter={setFilter} />
			<RightSide
				onToggleTask={onToggleTask}
				deleteTask={deleteTask}
				tasks={tasks}
			/>
		</main>
	);
};

export default Main;
