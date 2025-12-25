import List from "./List";

const RightSide = ({ tasks, onToggleTask, deleteTask }) => {
	return (
		<aside className="flex-1 min-h-0">
			<div className="scrollbar h-full overflow-y-auto flex flex-col gap-3 pr-2">
				{tasks.map((task) => {
					return (
						<List
							deleteTask={deleteTask}
							onToggle={onToggleTask}
							key={task.id}
							task={task}
						/>
					);
				})}
			</div>
		</aside>
	);
};

export default RightSide;
