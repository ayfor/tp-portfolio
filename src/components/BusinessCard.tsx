import { Disclosure } from "@headlessui/react";

import ProfileCard from "./ProfileCard";

type NavbarItem = {
	name: string;
	href: string;
	current: boolean;
};

type LogoBarItem = {
	name: string;
	source: string;
	alt: string;
};

const navigation: NavbarItem[] = [
	{ name: "about", href: "#", current: true },
	{ name: "services", href: "#", current: false },
	{ name: "my work", href: "#", current: false },
];

const BusinessCard = () => {
	return (
		<Disclosure as="div" className="sticky top-0">
			<div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between my-2">
					{/* PROFILE CARD */}
					<ProfileCard />

					{/* Default Menu */}
					<div className="flex flex-1 items-center justify-center">
						<div className="hidden w-full flex-row justify-center items-center sm:mx-6 2xl:flex">
							<div className="w-1/4 flex justify-between space-x-4">
								{navigation.map((item) => (
									<button key={item.name} className="text-primary font-display font-bold bg-transparent px-4 py-2 rounded-lg w-1/4 transition duration-150 ease-in-out hover:scale-125" aria-current={item.current ? "page" : undefined}>
										{item.name}.
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
				<Disclosure.Panel className="2xl:hidden">
					<div className="space-y-1 px-2 pt-2 pb-3">
						{navigation.map((item) => (
							<Disclosure.Button
								key={item.name}
								as="a"
								href={item.href}
								className="block w-100 min-w-full sm:w-5/12 px-10 py-2 rounded-lg text-center font-medium bg-white drop-shadow-md hover:bg-primary hover:text-white transition duration-150 ease-in-out"
								aria-current={item.current ? "page" : undefined}
							>
								{item.name}
							</Disclosure.Button>
						))}
					</div>
				</Disclosure.Panel>
			</div>
		</Disclosure>
	);
};

export default BusinessCard;
