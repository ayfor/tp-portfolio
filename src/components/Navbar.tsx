import { useState } from "react";
import BusinessCard from "./BusinessCard";


export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<div className="absolute w-full bg-transparent z-50 my-2">
			<BusinessCard />
		</div>
	);
}
