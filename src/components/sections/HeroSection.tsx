import { ArrowRightIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
	return (
		<section className="absolute w-full h-screen z-40">
			<main className="w-100 mx-4 mt-32 px-4 sm:px-6 lg:mt-32 lg:px-8 xl:mt-64">
				<div className="sm:text-left md:text-center">
					<h1 className="text-5xl font-bold text-gray-900 md:text-6xl ">
						Welcome to my <span className="text-indigo-600 font-display">creative studio.</span>
					</h1>
					<p className="w-100 opacity-60 mb-3 text-base text-black sm:mt-5 sm:text-lg md:mb-5 md:text-xl lg:mx-0">I deliver grounded and practical solutions to abstract problems</p>
					<div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
						<div className="rounded-md shadow">
							<a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent transition ease-in-out hover:scale-110 bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">
								Contact Me
								<ArrowRightIcon className="w-6 h-6 ml-4 transition ease-in-out hover:translate-x-2" aria-hidden="true" />
							</a>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
};

export default HeroSection;
