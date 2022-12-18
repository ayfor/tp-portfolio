import { Disclosure } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Image from "next/image";
import Carousel from "./Carousel";

type NavbarItem = {
	name: string;
	href: string;
	current: boolean;
};

type NavbarItems = NavbarItem[];

const navigation: NavbarItems = [
	{ name: "Services", href: "#", current: true },
	{ name: "My Work", href: "#", current: false },
	{ name: "About", href: "#", current: true },
];

const titles: string[] = ["Software Engineer", "Full Stack Developer", "UI Designer"];

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<div className='absolute w-full bg-transparent z-50 my-2'>
			<Disclosure as='div' className='sticky top-0'>
				<div className='mx-auto max-w-full px-2 sm:px-6 lg:px-8'>
					<div className='relative flex h-16 items-center justify-between my-2'>
						{/* PROFILE CARD */}
						<div className='absolute bg-white drop-shadow-xl inset-y-0 left-0 p-1 flex items-center justify-between xl:justify-start w-90 min-w-fit rounded-lg md:inset-auto md:ml-2 md:pr-0'>
							<div className='flex-shrink-0 p-2'>
								{/* Profile Picture */}
								<div className='flex border-2 border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
									<Image height='50%' width='50%' className='h-24 w-24 rounded-lg' src='/icon.svg' alt='' />
								</div>
							</div>
							{/* Name */}
							<div className='px-3 text-primary w-fit'>
								<h3 className='p-0 text-baseol font-display font-bold text-xl'>Joshua Stubbington</h3>
								<Carousel items={titles} />
							</div>
							{/* Mobile menu button*/}
							<div className='inset-y-0 right-0 flex items-end xl:hidden w-max mx-2'>
								<Disclosure.Button className='inline-flex items-center justify-center rounded-lg p-1 text-gray-800 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition ease-in-out duration-200 hover:scale-125'>
									{open ? <XMarkIcon className='block h-6 w-6' aria-hidden='true' /> : <ChevronDownIcon className='block h-6 w-6 animate-bounce' aria-hidden='true' />}
								</Disclosure.Button>
							</div>
						</div>
						{/* Menu */}
						<div className='flex flex-1 items-center justify-center'>
							<div className='hidden w-full flex-row justify-end items-center sm:mx-6 xl:flex'>
								<div className='w-1/4 flex justify-between space-x-4'>
									{navigation.map((item) => (
										<button
											key={item.name}
											className='text-primary font-medium bg-white drop-shadow-xl px-4 py-2 rounded-lg w-1/4 hover:bg-primary hover:text-white transition duration-150 ease-in-out'
											aria-current={item.current ? "page" : undefined}
										>
											{item.name}
										</button>
									))}
								</div>
							</div>
						</div>
					</div>
					<Disclosure.Panel className='xl:hidden'>
						<div className='space-y-1 px-2 pt-2 pb-3'>
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as='a'
									href={item.href}
									className='block w-100 sm:w-5/12 px-10 py-2 rounded-lg text-center font-medium bg-white drop-shadow-md hover:bg-primary hover:text-white transition duration-150 ease-in-out'
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</div>
			</Disclosure>
		</div>
	);
}
