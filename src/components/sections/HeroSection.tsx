import { ArrowRightIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
	return (
		<section className='absolute w-full h-screen z-40'>
			<main className='flex items-center justify-center mx-4 mt-32 px-4 sm:px-6 lg:mt-32 lg:px-8 xl:mt-64'>
				<div className='sm:text-left md:text-center text-primary'>
					<p className='opacity-60 mb-3 text-base sm:mt-5 sm:text-lg md:mb-5 md:text-xl lg:mx-0'>Full Stack Development | UI/UX Design | 3D Modeling </p>
					<h1 className='sm:my-12 text-5xl font-bold md:text-6xl font-display'>
						Engineer <ArrowRightIcon className='inline-block w-10 h-10' /> <span className='text-indigo-600'> Sofware Developer</span>
					</h1>
					<p className='opacity-80 mb-3 text-base text-primary sm:mt-5 sm:text-lg md:mb-5 md:text-xl lg:mx-0'>
						I deliver grounded, practical solutions to abstract problems to meet your needs.
					</p>
					<div className='mt-5 sm:mt-8 sm:flex sm:justify-center'>
						<div className='rounded-md mx-2'>
							<a
								href='#'
								className='flex w-full items-center justify-center rounded-md border-2 border-transparent transition ease-in-out hover:scale-110 bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg'
							>
								Contact Me
								<ArrowRightIcon className='w-6 h-6 ml-4 transition ease-in-out hover:translate-x-2' aria-hidden='true' />
							</a>
						</div>

						<div className='rounded-md mx-2'>
							<a
								href='#'
								className='group flex w-full items-center justify-center rounded-md border-2 border-indigo-600 transition ease-in-out hover:scale-105 bg-transparent px-8 py-3 font-semibold text-indigo-600 hover:bg-indigo-700 hover:text-white md:py-4 md:px-10 md:text-lg'
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
