import { ArrowRightIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
	return (
		<section className='absolute w-full h-screen z-40'>
			<main className='mx-4 mt-32 max-w-7xl px-4 sm:px-6 lg:mt-32 lg:px-8 xl:mt-64'>
				<div className='sm:text-left'>
					<h1 className='text-5xl font-bold tracking-tight text-gray-900 md:text-6xl '>
						<span className='inline'>I deliver</span>
						<span className='inline text-violet-accent'> grounded</span>
						<span className='inline'> solutions to</span>
						<span className='inline text-teal-accent'> abstract</span>
						<span className='inline'> problems</span>
					</h1>
					<p className='mt-3 text-base text-gray-500 sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0'>
						With experience in both front-end and back-end development, I can help you build your next project.
					</p>
					<div className='mt-5 sm:mt-8 sm:flex sm:justify-start'>
						<div className='rounded-md shadow'>
							<a
								href='#'
								className='flex w-full items-center justify-center rounded-md border border-transparent transition ease-in-out hover:scale-110 bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg'
							>
								Learn More
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
