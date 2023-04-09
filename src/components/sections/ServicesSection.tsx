import { Canvas } from "@react-three/fiber";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import GltfModel from "../models/GltfModel";
import SkillTag from "../SkillTag";
import { SkillTagProps } from "../SkillTag";

const WebDevelopmentSkillTags: SkillTagProps[] = [
	{ title: "React", icon: "/skill-icons/react.png", colour: "teal" },
	{ title: "Next.js", icon: "/skill-icons/next-js.png", colour: "gray" },
	{ title: "Electron", icon: "/skill-icons/electron.png", colour: "blue" },
];

const ThreeDModelingSkillTags: SkillTagProps[] = [
	{ title: "Three.js", icon: "/skill-icons/three-js.png", colour: "white" },
	{ title: "Blender", icon: "/skill-icons/blender.png", colour: "navy" },
	{ title: "SolidWorks", icon: "/skill-icons/solidworks.png", colour: "red" },
];

const UIUXDesignSkillTags: SkillTagProps[] = [
	{ title: "Figma", icon: "/skill-icons/figma.png", colour: "purple" },
	{ title: "Adobe Illustrator", icon: "/skill-icons/adobe-illustrator.png", colour: "orange" },
	{ title: "Adobe XD", icon: "/skill-icons/adobe-xd.png", colour: "pink" },
	{ title: "Adobe Photoshop", icon: "/skill-icons/adobe-photoshop.png", colour: "blue" },
];

/** */
const ServicesSection = () => {
	const servicesModelAnimation = (obj: any) => {
		obj.current.rotation.y = Math.cos(Date.now() / 5000);
	};

	return (
		<div className='curve-section border-solid border-primary border-2 relative w-full min-h-fit h-full bg-primary'>
			<div className='flex flex-col items-center h-full p-12'>
				<h1 className='text-white font-display text-4xl'>Find out what I can do for you...</h1>

				<div className='w-full flex flex-col items-center justify-center text-gray-700 md:p-20'>
					<div className='flex flex-wrap align-top justify-center w-full'>
						{/* Left Card */}
						<div className='max-w-md flex flex-col overflow-hidden'>
							<div className='flex flex-col items-center px-10 pt-10 pb-6'>
								<div className='m-2 p-5 max-w-xs h-96'>
									<Canvas
										camera={{
											near: 0.1,
											far: 1000,
											zoom: 1.1,
											position: [0, 0, 3],
										}}
									>
										<pointLight position={[10, 10, 10]} />
										<ambientLight intensity={0.25} />
										<GltfModel key={"uiux-model"} position={[0, -1, 1.25]} modelPath='/models/pencil.glb' refAnimationFn={servicesModelAnimation} />
									</Canvas>
								</div>
								<span className='font-semibold text-white text-3xl'>UI / UX Design</span>
							</div>
							<div className='max-w-md flex flex-col items-center px-10 pb-10 justfy-center '>
								{/* UIUX Skill List */}
								<div className='flex justify-center flex-row flex-wrap py-2'>
									{UIUXDesignSkillTags.map(({ title, icon, colour }, index) => (
										<SkillTag key={`${index}-uiuxst`} title={title} icon={icon} colour={colour} />
									))}
								</div>

								<button className='group flex items-center justify-center w-fit h-12 px-4 text-sm uppercase rounded-full ring-inset ring-4 ring-white text-white transition ease-in-out hover:scale-105'>
									<span className='pl-6'>Learn More</span>
									<ArrowRightIcon className='w-6 h-6 ml-2 transition ease-in-out group-hover:translate-x-2' aria-hidden='true' />
								</button>
							</div>
						</div>
						{/* Middle Card */}
						<div className='max-w-md flex flex-col overflow-hidden mt-8 scale-110'>
							<div className='flex flex-col items-center px-10 pt-10 pb-6 '>
								<div className='m-2 p-5 max-w-xs h-96'>
									<Canvas
										camera={{
											near: 0.1,
											far: 1000,
											zoom: 1.1,
											position: [0, 0, 3],
										}}
									>
										<pointLight position={[10, 10, 10]} />
										<ambientLight intensity={0.25} />
										<GltfModel key={"web-dev-model"} position={[-0.5, -2, 0.75]} modelPath='/models/web-dev.glb' refAnimationFn={servicesModelAnimation} />
									</Canvas>
								</div>
								<span className='font-semibold text-white text-3xl'>Web Development</span>
							</div>
							<div className='max-w-md flex flex-col items-center px-10 pb-10 justfy-center '>
								{/* Web Dev Skill List */}
								<div className='flex justify-center flex-row flex-wrap py-2'>
									{WebDevelopmentSkillTags.map(({ title, icon, colour }, index) => (
										<SkillTag key={`${index}-wdst`} title={title} icon={icon} colour={colour} />
									))}
								</div>

								<button className='group flex items-center justify-center w-fit h-12 px-4 text-sm uppercase rounded-full ring-inset ring-4 ring-white text-white transition ease-in-out hover:scale-105'>
									<span className='pl-6'>Learn More</span>
									<ArrowRightIcon className='w-6 h-6 ml-2 transition ease-in-out group-hover:translate-x-2' aria-hidden='true' />
								</button>
							</div>
						</div>
						{/* Right Card */}
						<div className='max-w-md flex flex-col overflow-hidden'>
							<div className='flex flex-col items-center px-10 pt-10 pb-6'>
								<div className='m-2 p-5 max-w-xs h-96'>
									{/* <Canvas
										camera={{
											near: 0.1,
											far: 1000,
											zoom: 1.1,
											position: [0, 0, 3],
										}}
									>
										<pointLight position={[10, 10, 10]} />
										<ambientLight intensity={0.25} />
										<GltfModel key={"web-dev-model"} position={[-0.5, -2, 0.75]} modelPath='/models/web-dev.glb' refAnimationFn={servicesModelAnimation} />
									</Canvas> */}
								</div>
								<span className='font-semibold text-white text-3xl'>3D Modelling</span>
							</div>
							<div className='flex flex-col items-center px-10 pb-10 justfy-center '>
								{/* Web Dev Skill List */}
								<div className='flex justify-center flex-row flex-wrap py-2'>
									{ThreeDModelingSkillTags.map(({ title, icon, colour }, index) => (
										<SkillTag key={`${index}-wdst`} title={title} icon={icon} colour={colour} />
									))}
								</div>

								<button className='group flex items-center justify-center w-fit h-12 px-4 text-sm uppercase rounded-full ring-inset ring-4 ring-white text-white transition ease-in-out hover:scale-105'>
									<span className='pl-6'>Learn More</span>
									<ArrowRightIcon className='w-6 h-6 ml-2 transition ease-in-out group-hover:translate-x-2' aria-hidden='true' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesSection;
