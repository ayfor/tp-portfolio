import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const Cube = () => {
	const cube = useRef<Mesh>();

	const [cubeSize, setCubeSize] = useState<number[]>([0.75, 0.75, 0.75]);
	const [cubePosition, setCubePosition] = useState<number[]>([1, 1, 2]);

	useFrame(() => {
		cube.current.rotation.x += 0.005;
		cube.current.rotation.y += 0.005;

		cube.current.position.x = Math.sin(Date.now() / 1000) * 2.25 + 0.35;
		cube.current.position.y = Math.cos(Date.now() / 1000) * 2.25 + 0.35;
	});

	return (
		<mesh ref={cube} position={cubePosition}>
			<boxGeometry args={cubeSize} />
			<meshStandardMaterial color='#0391BA' />
		</mesh>
	);
};

const Sphere = () => {
	const sphere = useRef<Mesh>();

	const [sphereSize, setSphereSize] = useState<number[]>([0.7, 30, 30]);
	const [spherePosition, setSpherePosition] = useState<number[]>([0, 0, 0]);

	useFrame(() => {
		sphere.current.position.x = Math.sin(Date.now() / 1000) * 2;
		sphere.current.position.y = Math.cos(Date.now() / 1000) * 2;
	});

	return (
		<mesh ref={sphere} position={spherePosition}>
			<sphereGeometry args={sphereSize} />
			<meshStandardMaterial color='hotpink' />
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

		pyramid.current.position.x = Math.cos(Date.now() / 1000) * 2;
		pyramid.current.position.y = Math.sin(Date.now() / 1000) * 2;
	});

	return (
		<mesh ref={pyramid} position={pyramidPosition}>
			<coneGeometry args={pyramidSize} />
			<meshStandardMaterial color='orange' />
		</mesh>
	);
};

const ThreeDBackground = (props: any) => {
	return (
		<div
			style={{
				height: "80vh",
				width: "100vw",
			}}
			className='flex justify-center items-center'
		>
			<Canvas
				camera={{
					near: 0.1,
					far: 1000,
					zoom: 1,
				}}
			>
				<Suspense fallback={null}>
					<pointLight intensity={1.0} position={[5, 3, 5]} />
					<Cube />
					<Sphere />
					<Pyramid />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default ThreeDBackground;
