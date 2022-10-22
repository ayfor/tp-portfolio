import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Mesh } from "three";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "../models/GltfModel";

const COLOR_MAP = {
	SPHERE: "#1e2019",
	CUBE: "#1e2019",
	PYRAMID: "#4f46e5",
};

type GltfModelProps = {
	modelPath: string;
	scale?: number;
	position?: number[];
	refAnimationFn?: (ref: any) => void;
};

const modelProps: GltfModelProps[] = [
	//Cube proxy
	{
		modelPath: "/coffee-cup.gltf",
		scale: 0.075,
		position: [1, 0, 1],
		refAnimationFn: (obj) => {
			obj.current.rotation.x += 0.005;
			obj.current.rotation.y += 0.005;
			obj.current.position.x = Math.sin(Date.now() / 1000);
			obj.current.position.y = Math.cos(Date.now() / 1000);
		},
	},
	//Sphere proxy
	{
		modelPath: "/octahedron.glb",
		scale: 0.1,
		position: [0, 0, -2],
		refAnimationFn: (obj) => {
			obj.current.rotation.x += 0.01;
			obj.current.rotation.y += 0.01;

			obj.current.position.x = Math.cos(Date.now() / 1000) * 3 - 2;
			obj.current.position.y = Math.sin(Date.now() / 1000) * 3 + 0.35;
		},
	},
	//Pyramid proxy
	{
		modelPath: "/infinity.glb",
		scale: 0.1,
		position: [0, 0, 0],
		refAnimationFn: (obj) => {
			obj.current.rotation.x += 0.001;
			obj.current.rotation.y += 0.005;
			obj.current.position.x = Math.sin(Date.now() / 1000) * 2 - 2;
			obj.current.position.y = Math.cos(Date.now() / 1000) * 2;
		},
	},
];

const GeoOrbitSection = () => {
	return (
		<div
			style={{
				height: "100vh",
				width: "100vw",
				maxWidth: "100%",
			}}
			className='flex justify-center items-center'
		>
			<Canvas
				camera={{
					near: 0.1,
					far: 1000,
					zoom: 1,
					position: [0, 0, 3],
				}}
			>
				{/* <OrbitControls /> */}
				<Suspense fallback={null}>
					<pointLight intensity={1} position={[5, 3, 5]} />
					{modelProps.map((props, index) => (
						<GltfModel key={index} {...props} />
					))}
				</Suspense>
			</Canvas>
		</div>
	);
};

export default GeoOrbitSection;
