const HeroSection = () => {
	return (
		<section className='absolute w-full h-screen z-40'>
			<main className='mx-4 mt-32 max-w-7xl px-4 sm:px-6 lg:mt-32 lg:px-8 xl:mt-64'>
				<div className='sm:text-left'>
					<h1 className='text-5xl font-bold tracking-tight text-gray-900 md:text-6xl'>
						<span className='inline'>I deliver</span>
						<span className='inline text-violet-800'> grounded</span>
						<span className='inline'> solutions to</span>
						<span className='inline text-violet-800'> abstract</span>
						<span className='inline'> problems</span>
					</h1>
					<p className='mt-3 text-base text-gray-500 sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0'>
						Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
					</p>
					<div className='mt-5 sm:mt-8 sm:flex sm:justify-start'>
						<div className='rounded-md shadow'>
							<a
								href='#'
								className='flex w-full items-center justify-center rounded-md border border-transparent transition ease-in-out hover:scale-110 bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg'
							>
								Learn More
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6 mx-1 transition ease-in-out hover:translate-x-2'
								>
									<path strokeLinecap='round' strokeLinejoin='round' d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3' />
								</svg>
							</a>
						</div>
					</div>
				</div>
			</main>
		</section>
	);
};

export default HeroSection;
