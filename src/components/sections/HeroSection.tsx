import { ArrowRightIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
	return (
		<section className='absolute w-full h-screen z-40'>
			<main className='flex items-center justify-center mx-4 mt-32 px-4 sm:px-6 lg:mt-32 lg:px-8 xl:mt-64'>
				<div className='text-center text-primary'>
					<p className='opacity-60 mb-3 text-base sm:mt-5 sm:text-lg md:mb-5 md:text-xl lg:mx-0'>Full Stack Development | UI/UX Design | 3D Modeling </p>
					<h1 className='my-3 text-6xl font-bold md:text-8xl font-display'>twin spruce</h1>
					<h2 className='text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 animate-gradient-x'>
						software studio
					</h2>
					<div className='mt-5 sm:mt-8 sm:flex sm:justify-center'>
						<div className='rounded-md m-2'>
							<a
								href='#'
								className='group flex w-full items-center justify-center rounded-md border-2 border-transparent transition ease-in-out hover:scale-110 hover:drop-shadow-glow bg-highlight px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 animate-gradient-x md:py-4 md:px-10 md:text-lg'
							>
								Contact Me
								<ArrowRightIcon className='w-6 h-6 ml-4 transition ease-in-out group-hover:translate-x-2' aria-hidden='true' />
							</a>
						</div>

						<div className='rounded-md m-2'>
							<a
								href='#'
								className='group flex w-full items-center justify-center rounded-md border-2 border-primary bg-transparent transition ease-in-out hover:scale-105 hover:bg-primary hover:text-white px-8 py-3 font-semibold text-primary md:py-4 md:px-10 md:text-lg'
							>
								Download Resume
								<ArrowDownTrayIcon className='w-6 h-6 ml-4 transition ease-in-out group-hover:animate-bounce' />
							</a>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
};

export default HeroSection;
