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

const itemColorClassNames = ["text-purple-accent", "text-teal-accent", "text-violet-accent"];

const Carousel = ({ items }: { items: string[] }) => {
	const [viewportRef] = useEmblaCarousel({ loop: true }, [Autoplay(options)]);

	return (
		<div className='overflow-hidden' ref={viewportRef}>
			<div className='flex'>
				{items.map((item, index) => (
					<div className='flex-01 font-medium font-default' key={index}>
						<div className={itemColorClassNames[index % itemColorClassNames.length]}>{item}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Carousel;
