import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const Box = () => {
	const boxRef = useRef();
	useFrame(() => {
		boxRef.current.rotation.x += 0.01;
		boxRef.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={boxRef} position={[0, 0, 0]}>
			<boxBufferGeometry args={[2, 2, 2]} />
			<meshStandardMaterial color='hotpink' />
		</mesh>
	);
};

const Sphere = () => {
	const sphereRef = useRef();
	useFrame(() => {
		sphereRef.current.rotation.x += 0.01;
		sphereRef.current.rotation.y += 0.01;
	});

	return (
		<mesh ref={sphereRef} position={[2, 2, 2]}>
			<sphereBufferGeometry args={[2, 2, 2]} />
			<meshStandardMaterial color='hotpink' />
		</mesh>
	);
};

const ThreeDBackground = () => {
	return (
		<Canvas>
			<ambientLight intensity={0.1} />
			<directionalLight color='red' position={[0, 0, 5]} />
			<Box />
			<Sphere />
		</Canvas>
	);
};

export default ThreeDBackground;
