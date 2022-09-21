/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navigation = [
	{ name: "About", href: "#", current: true },
	{ name: "My Work", href: "#", current: false },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<Disclosure as='nav'>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
						<div className='relative flex h-16 items-center justify-between'>
							{/* Logo */}
							<div className='absolute inset-y-0 left-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
								<div className='flex-shrink-0'>
									{/* Profile Picture */}
									<div className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
										<img
											className='h-10 w-10 rounded-full'
											src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
											alt=''
										/>
									</div>
									{/* Name */}
								</div>
								<div className='px-3 text-black'>
									<h3 className='p-0 text-baseol font-bold'>Joshua Stubbington</h3>
									<span className='p-0 -mt-4'>Software Engineer</span>
								</div>
							</div>
							<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
								{/* Mobile menu button*/}
								<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
									<span className='sr-only'>Open main menu</span>
									{open ? <XMarkIcon className='block h-6 w-6' aria-hidden='true' /> : <Bars3Icon className='block h-6 w-6' aria-hidden='true' />}
								</Disclosure.Button>
							</div>
							{/* Menu */}
							<div className='flex flex-1 items-center justify-center'>
								<div className='hidden w-4/5 flex-row justify-end items-center sm:ml-6 sm:flex'>
									<div className='w-1/3 flex justify-between space-x-4'>
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className='text-black px-3 py-2 rounded-lg transition ease-in-out duration-200 hover:bg-gray-700 hover:text-white hover:scale-105'
												aria-current={item.current ? "page" : undefined}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
							{/* Action */}
							<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
								<div className='flex-shrink-0'>
									<button className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
										<span className='sr-only'>View notifications</span>
										<BellIcon className='h-6 w-6' aria-hidden='true' />
									</button>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='sm:hidden'>
						<div className='space-y-1 px-2 pt-2 pb-3'>
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as='a'
									href={item.href}
									className='block px-5 py-5 rounded-md text-base font-medium'
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}