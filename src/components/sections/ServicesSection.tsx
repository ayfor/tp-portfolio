import { Canvas } from "@react-three/fiber";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import GltfModel from "../models/GltfModel";

/** */
const ServicesSection = () => {
	const servicesModelAnimation = (obj: any) => {
		obj.current.rotation.y = Math.cos(Date.now() / 5000);
	};

	return (
		<div className='curve-section border-solid border-primary border-2 relative w-full min-h-fit h-screen bg-primary'>
			<div className='flex flex-col items-center h-full p-12'>
				<h1 className='text-white font-display text-4xl'>Find out what I can do for you...</h1>

				<div className='flex flex-col items-center justify-center text-gray-700 md:p-20'>
					<div className='flex flex-wrap items-center justify-center w-full max-w-4xl'>
						{/* Left Card */}
						<div className='flex flex-col flex-grow mt-8 overflow-hidden bg-white rounded-lg shadow-lg'>
							<div className='flex flex-col items-center p-10 bg-gray-200'>
								<span className='font-semibold'>UI Design</span>
								<div className='flex items-center'>
									<span className='text-3xl'>$</span>
									<span className='text-5xl font-bold'>20</span>
									<span className='text-2xl text-gray-500'>/mo</span>
								</div>
							</div>
							<div className='flex px-10 pb-10 justfy-center'>
								<button className='flex items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg'>Join now</button>
							</div>
						</div>
						{/* Middle Card */}
						<div className='z-10 flex flex-col mt-8 overflow-hidden transform md:scale-110'>
							<div className='flex flex-col items-center p-10'>
								<div className='m-2p-5 max-w-xs h-96'>
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
										<GltfModel key={"web-dev-model"} position={[0, -1, -0.25]} modelPath='/models/web-dev.glb' refAnimationFn={servicesModelAnimation} />
									</Canvas>
								</div>
								<span className='font-semibold text-white text-3xl'>Web Development</span>
							</div>
							<div className='flex flex-col items-center px-10 pb-10 justfy-center '>
								<button className='group flex items-center justify-center w-fit h-12 px-4 text-sm uppercase rounded-full ring-inset ring-4 ring-white text-white'>
									<span className='pl-6'>Learn More</span>
									<ArrowRightIcon className='w-6 h-6 ml-2 transition ease-in-out group-hover:translate-x-2' aria-hidden='true' />
								</button>
							</div>
						</div>
						{/* Right Card */}
						<div className='flex flex-col flex-grow overflow-hidden bg-white rounded-lg shadow-lg mt-8'>
							<div className='flex flex-col items-center p-10 bg-gray-200'>
								<span className='font-semibold'>3D Modeling</span>
								<div className='flex items-center'>
									<span className='text-3xl'>$</span>
									<span className='text-5xl font-bold'>99</span>
									<span className='text-2xl text-gray-500'>/mo</span>
								</div>
							</div>
							<div className='flex px-10 pb-10 justfy-center'>
								<button className='flex flex-column items-center justify-center w-full h-12 px-6 text-sm uppercase bg-gray-200 rounded-lg'>Join now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServicesSection;
