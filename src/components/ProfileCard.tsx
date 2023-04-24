import Image from "next/image";
import { useState } from "react";

import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";

const titles: string[] = ["Software Engineer", "Full Stack Developer", "UI Designer"];

const ProfileCard = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className="absolute inset-y-0 left-0 p-1 flex items-center justify-between xl:justify-start w-90 min-w-fit rounded-lg md:inset-auto md:ml-2 md:pr-0">
			<div className="flex-shrink-0 p-2">
				{/* Profile Picture */}
				<div className="flex border-2 border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
					<Image height="90%" width="90%" src="/tslogo-alt.svg" alt="" />
				</div>
			</div>
			{/* Mobile menu button*/}
			<div className="inset-y-0 flex items-center 2xl:hidden w-max mx-2">
				<Disclosure.Button className="inline-flex items-center justify-center rounded-lg p-1 text-gray-800 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition ease-in-out duration-200 hover:scale-125">
					{open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <ChevronDownIcon className="block h-6 w-6 animate-bounce" aria-hidden="true" />}
				</Disclosure.Button>
			</div>
		</div>
	);
};

export default ProfileCard;
