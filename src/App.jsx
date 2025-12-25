import Nav from "./components/Nav.jsx";
import Main from "./components/Main.jsx";
import Input from "./components/Input.jsx";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
	const [filter, setFilter] = useState("all");
	const [value, setValue] = useState("");
	const [tasks, setTasks] = useState(
		JSON.parse(localStorage.getItem("tasks")) || []
	);

	// filter tasks based on filter state
	const filteredTasks = tasks.filter((task) => {
		if (filter === "pending") return !task.isCompleted;
		if (filter === "completed") return task.isCompleted;
		return true; // all
	});

	// delete task
	const deleteTask = (id) => {
		setTasks((prev) => prev.filter((task) => task.id !== id));
	};

	// toggle task complete
	const toggleTask = (id) => {
		setTasks((prev) =>
			prev.map((task) =>
				task.id === id
					? { ...task, isCompleted: !task.isCompleted }
					: task
			)
		);
	};

	// save or update localstorage
	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	// push the new task to tasks array
	const saveTask = (work) => {
		let task = { id: uuidv4(), work, isCompleted: false };
		setTasks((prev) => [...prev, task]);
	};

	// handle the enter event
	const handleEnter = (e) => {
		if (e.key == "Enter" && e.target.value != "") {
			saveTask(e.target.value.trim());
			setValue("");
		}
	};

	return (
		<div className="app-div flex flex-col h-dvh overflow-hidden">
			<Nav title="Task Manager" />
			<div className="flex justify-center items-center">
				<Input
					onAddTask={saveTask}
					onKeyDown={handleEnter}
					value={value}
					setValue={setValue}
				/>
			</div>
			<Main
				filter={filter}
				setFilter={setFilter}
				deleteTask={deleteTask}
				onToggleTask={toggleTask}
				tasks={filteredTasks}
			/>
			<footer className="mt-auto py-6 text-center text-slate-400 text-sm">
				<p>
					Designed and Developed by{" "}
					<a
						href="https://www.linkedin.com/in/aniketks1"
						target="_blank"
						className="font-semibold text-slate-200">
						Aniket Kumar Singh
					</a>
				</p>
			</footer>
		</div>
	);
};

export default App;
