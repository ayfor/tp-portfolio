import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface GltfModelProps {
	modelPath: string;
	scale?: number;
	position?: number[];
	refAnimationFn?: (ref: any) => void;
}

const GltfModel = ({ modelPath, scale = 0.5, position = [0, 0, 0], refAnimationFn = () => {} }: GltfModelProps) => {
	const ref = useRef();
	const gltf = useLoader(GLTFLoader, modelPath);

	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame(() => {
		refAnimationFn(ref);
	});

	return (
		<>
			<primitive ref={ref} object={gltf.scene} position={position} scale={scale} />
		</>
	);
};

export default GltfModel;
