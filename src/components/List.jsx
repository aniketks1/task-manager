import React from "react";
import { CircleCheck, CircleX, Circle } from "lucide-react";

const List = ({ task, onToggle, deleteTask }) => {
	return (
		<div className="bg-slate-500 flex items-center justify-between gap-2 w-100 min-h-10 px-5 py-6 rounded-md">
			<div className="flex items-center gap-3">
				<div
					onClick={() => {
						onToggle(task.id);
					}}
					className="cursor-pointer">
					{task.isCompleted ? (
						<CircleCheck size={24} strokeWidth={3} />
					) : (
						<Circle size={24} strokeWidth={3} />
					)}
				</div>

				<p className="text-xl font-medium wrap-anywhere">{task.work}</p>
			</div>

			<div onClick={() => deleteTask(task.id)} className="cursor-pointer">
				<CircleX size={24} strokeWidth={3} />
			</div>
		</div>
	);
};

export default List;
