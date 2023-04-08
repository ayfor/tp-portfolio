export interface SkillTagProps {
	title: string;
	icon: string; // src path
	colour: "gray" | "blue" | "teal" | "white" | "red" | "navy" | "yellow" | "green" | "purple" | "pink" | "orange";
}

//TOOD: Add tooltip to show description on hover
const SkillTag = ({ title, icon, colour }: SkillTagProps) => {
	const colourMap = new Map<string, string>([
		["gray", "bg-gray-400"],
		["blue", "bg-blue-300"],
		["teal", "bg-cyan-800"],
		["white", "bg-white"],
		["red", "bg-red-400"],
		["navy", "bg-blue-900"],
		["yellow", "bg-yellow-400"],
		["green", "bg-green-400"],
		["purple", "bg-purple-400"],
		["pink", "bg-pink-400"],
		["orange", "bg-orange-400"],
	]);

	const colourClass = colourMap.get(colour) as string;

	const divClass = `min-w-fit flex flex-row items-center justify-center pl-1 pr-2 py-1 m-1 text-white text-sm ${colourClass} rounded-lg shadow-lg`;

	return (
		<div className={divClass}>
			<img className='w-6 h-6 mr-1' src={icon} alt={title as string} />
			{title}
		</div>
	);
};

export default SkillTag;
