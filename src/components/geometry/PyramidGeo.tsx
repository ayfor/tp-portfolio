import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const PyramidGeo = () => {
	const Pyramid = () => {
		const pyramid = useRef<Mesh>();

		const [pyramidSize, setPyramidSize] = useState<number[]>([3, 5, 4]);
		const [pyramidPosition, setPyramidPosition] = useState<number[]>([0, 0, -2]);

		useFrame(() => {
			pyramid.current.rotation.y += 0.005;
		});

		return (
			<mesh ref={pyramid} position={pyramidPosition}>
				<coneGeometry args={pyramidSize} />
				<meshStandardMaterial color='teal' />
			</mesh>
		);
	};

	return (
		<div className='inline h-min w-min'>
			<Canvas
				camera={{
					zoom: 1,
					position: [0, 2, 3.5],
				}}
				className='inline inline-canvas'
			>
				{/* <OrbitControls /> */}
				<Suspense fallback={null}>
					<pointLight intensity={1.5} position={[3, 3, 3]} />
					<Pyramid />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default PyramidGeo;
