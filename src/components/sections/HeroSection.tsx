import { ArrowRightIcon } from "@heroicons/react/24/outline";
import PyramidGeo from "../geometry/PyramidGeo";

const HeroSection = () => {
	return (
		<section className='absolute w-full h-screen z-40'>
			<main className='mx-4 mt-32 max-w-7xl px-4 sm:px-6 lg:mt-32 lg:px-8 xl:mt-64'>
				<div className='sm:text-left'>
					<p className='w-100 opacity-60 mb-3 text-base text-gray-400 sm:mt-5 sm:text-lg md:mb-5 md:text-xl lg:mx-0'>
						Web Development, UI/UX Design, Desktop Application Development
					</p>
					<h1 className='text-5xl font-bold tracking-tight text-gray-900 md:text-6xl '>
						<span className='inline'> Delivering</span>
						<span className='inline tracking-wider text-violet-accent'> GROUNDED</span>
						<span className='inline'> solutions to </span>
						<span className='inline tracking-wider text-teal-accent'>
							<div className='inline-block'>
								<PyramidGeo />
								BSTRACT
							</div>
						</span>
						<span className='inline'> problems</span>
					</h1>
					<div className='mt-5 sm:mt-8 sm:flex sm:justify-start'>
						<div className='rounded-md shadow'>
							<a
								href='#'
								className='flex w-full items-center justify-center rounded-md border border-transparent transition ease-in-out hover:scale-110 bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg'
							>
								Contact Me
								<ArrowRightIcon className='w-6 h-6 ml-4 transition ease-in-out hover:translate-x-2' aria-hidden='true' />
							</a>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
};

export default HeroSection;
