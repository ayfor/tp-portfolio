import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { OrbitControls } from "@react-three/drei";

const COLOR_MAP = {
	SPHERE: "#1e2019",
	CUBE: "#1e2019",
	PYRAMID: "#1e2019",
};

const Cube = () => {
	const cube = useRef<Mesh>();

	const [cubeSize, setCubeSize] = useState<number[]>([1.5, 1.5, 1.5]);
	const [cubePosition, setCubePosition] = useState<number[]>([1, 1, 0]);

	useFrame(() => {
		cube.current.rotation.x += 0.005;
		cube.current.rotation.y += 0.005;

		cube.current.position.x = Math.cos(Date.now() / 1000) * 3 - 2;
		cube.current.position.y = Math.sin(Date.now() / 1000) * 3 + 0.35;
	});

	return (
		<mesh ref={cube} position={cubePosition}>
			<boxGeometry args={cubeSize} />
			<meshStandardMaterial color={COLOR_MAP.CUBE} />
		</mesh>
	);
};

const Sphere = () => {
	const sphere = useRef<Mesh>();

	const [sphereSize, setSphereSize] = useState<number[]>([1.4, 90, 90]);
	const [spherePosition, setSpherePosition] = useState<number[]>([0, 0, -10]);

	useFrame(() => {
		sphere.current.rotation.x += 0.005;
		sphere.current.rotation.y += 0.005;

		sphere.current.position.x = Math.sin(Date.now() / 1000) * 4 - 2;
		sphere.current.position.y = Math.cos(Date.now() / 1000) * 4;
	});

	return (
		<mesh ref={sphere} position={spherePosition}>
			<sphereGeometry args={sphereSize} attach='geometry' />
			<meshStandardMaterial color={COLOR_MAP.SPHERE} />
		</mesh>
	);
};

const Pyramid = () => {
	const pyramid = useRef<Mesh>();

	const [pyramidSize, setPyramidSize] = useState<number[]>([1, 1, 4]);
	const [pyramidPosition, setPyramidPosition] = useState<number[]>([0, 0, -2]);

	useFrame(() => {
		pyramid.current.rotation.x += 0.005;
		pyramid.current.rotation.y += 0.005;

		pyramid.current.position.x = Math.sin(Date.now() / 1000) * 6;
		pyramid.current.position.y = Math.cos(Date.now() / 1000) * 2;
	});

	return (
		<mesh ref={pyramid} position={pyramidPosition}>
			<coneGeometry args={pyramidSize} />
			<meshStandardMaterial color={COLOR_MAP.PYRAMID} />
		</mesh>
	);
};

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
					<Cube />
					<Sphere />
					<Pyramid />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default GeoOrbitSection;
