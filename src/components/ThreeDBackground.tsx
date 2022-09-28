import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const Cube = () => {
	const cube = useRef<Mesh>();

	const [cubeSize, setCubeSize] = useState<number[]>([0.75, 0.75, 0.75]);
	const [cubePosition, setCubePosition] = useState<number[]>([1, 1, 1]);

	useFrame(() => {
		cube.current.rotation.x += 0.01;
		cube.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={cube} position={cubePosition}>
			<boxGeometry args={cubeSize} />
			<meshStandardMaterial color="#0391BA" />
		</mesh>
	);
};

const Sphere = () => {
	const sphere = useRef<Mesh>();

	const [sphereSize, setSphereSize] = useState<number[]>([0.7, 30, 30]);
	const [spherePosition, setSpherePosition] = useState<number[]>([0, 0, 0]);

	useFrame(() => {
		sphere.current.rotation.x += 0.01;
		sphere.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={sphere} position={spherePosition}>
			<sphereGeometry args={sphereSize} />
			<meshStandardMaterial color="hotpink" />
		</mesh>
	);
};

const Pyramid = () => {
	const pyramid = useRef<Mesh>();

	const [pyramidSize, setPyramidSize] = useState<number[]>([1, 1, 4]);
	const [pyramidPosition, setPyramidPosition] = useState<number[]>([-1.5, -1.5, 0]);

	useFrame(() => {
		pyramid.current.rotation.x += 0.01;
		pyramid.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={pyramid} position={pyramidPosition}>
			<coneGeometry args={pyramidSize} />
			<meshStandardMaterial color="orange" />
		</mesh>
	);
};

const ThreeDBackground = () => {
	return (
		<div
			style={{
				height: "100vh",
				width: "100vw",
			}}
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
