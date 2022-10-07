import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type AutoplayOptions = {
	delay: number;
	playOnInit: boolean;
};

//Autoplay Options
const options: AutoplayOptions = {
	delay: 4000,
	playOnInit: true,
};

const itemColorClassNames = ["text-violet-500", "text-emerald-500", "text-teal-500"];

const Carousel = ({ items }: { items: string[] }) => {
	const [viewportRef] = useEmblaCarousel({ loop: true }, [Autoplay(options)]);

	return (
		<div className='overflow-hidden' ref={viewportRef}>
			<div className='flex'>
				{items.map((item, index) => (
					<div className='flex-01 font-medium font-subtitle' key={index}>
						<div className={itemColorClassNames[index % itemColorClassNames.length]}>{item}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Carousel;
