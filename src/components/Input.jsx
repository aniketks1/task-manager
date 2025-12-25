import { CirclePlus } from "lucide-react";
import Button from "./Button";

const Input = ({ onKeyDown, setValue, value, onAddTask }) => {
	const handleClick = () => {
		if (value.trim() === "") return;

		onAddTask(value.trim()); // ✅ pass argument here
		setValue("");
	};

	return (
		<div className="flex gap-2">
			<input
				onKeyDown={onKeyDown}
				onChange={(e) => setValue(e.target.value)}
				value={value}
				className="text-3xl px-3 py-5 w-200 border rounded border-slate-600"
				type="text"
				placeholder="What new you want to do?"
			/>
			<Button onClick={handleClick}>
				<CirclePlus size={24} strokeWidth={3} />
				Add task
			</Button>
		</div>
	);
};

export default Input;
