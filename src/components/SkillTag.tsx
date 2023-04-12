import { Transition } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export interface SkillTagProps {
	title: string;
	icon: string; // src path
	colour: "gray" | "blue" | "teal" | "white" | "red" | "navy" | "yellow" | "green" | "purple" | "pink" | "orange";
}

//TOOD: Add tooltip to show description on hover
const SkillTag = ({ title, icon, colour }: SkillTagProps) => {
	const [show, setShow] = useState(false);
	const colourMap = new Map<string, string>([
		["gray", "bg-gray-400"],
		["blue", "bg-blue-300"],
		["teal", "bg-cyan-600"],
		["white", "bg-white"],
		["red", "bg-red-800"],
		["navy", "bg-blue-900"],
		["yellow", "bg-yellow-400"],
		["green", "bg-green-400"],
		["purple", "bg-violet-700"],
		["pink", "bg-fuchsia-400"],
		["orange", "bg-orange-400"],
	]);

	const colourClass = colourMap.get(colour) as string;

	const textColor = colour === "white" ? "text-gray-800" : "text-white";

	const divClass = `min-w-fit flex flex-row items-center justify-center pl-1 pr-2 py-1 m-1 ${textColor} text-sm ${colourClass} rounded-lg shadow-lg transition-all ease-linear duration-500 bg-opacity-60 hover:bg-opacity-100 hover:cursor-pointer`;

	return (
		<div className={divClass} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
			<img className='w-6 h-6 mr-1 font-shadow' src={icon} alt={title as string} />
			{title}
			<Transition
				show={show}
				className='ml-1 w-6 h-6 hover:scale-125 hover:cursor-pointer hover:rotate-180 hover:transition-all hover:ease-in-out hover:duration-300'
				enter='transition-all ease-in-out duration-300'
				enterFrom=' opacity-0 -translate-x-2'
				enterTo=' opacity-100 translate-x-0'
				leave='transition-all ease-out duration-100'
				leaveFrom=' opacity-100 translate-x-1'
				leaveTo=' opacity-0 -translate-x-2'
			>
				<PlusCircleIcon />
			</Transition>
		</div>
	);
};

export default SkillTag;
