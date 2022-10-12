const HeroSection = () => {
	return (
		<section className="absolute w-full h-screen z-40">
			<main className="mx-4 mt-32 max-w-7xl px-4 sm:px-6 lg:mt-32 lg:px-8 xl:mt-64">
				<div className="sm:text-left">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
						<span className="block xl:inline">I deliver</span>
						<span className="block text-violet-800 xl:inline"> grounded</span>
						<span className="block xl:inline"> solutions to</span>
						<span className="block text-violet-800 xl:inline"> abstract</span>
						<span className="block xl:inline"> problems</span>
					</h1>
					<p className="mt-3 text-base text-gray-500 sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
					<div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
						<div className="rounded-md shadow">
							<a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">
								Get started
							</a>
						</div>
						<div className="mt-3 sm:mt-0 sm:ml-3">
							<a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg">
								Live demo
							</a>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
};

export default HeroSection;
