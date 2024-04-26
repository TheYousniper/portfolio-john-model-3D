// "use client";

// import React, { useRef } from "react";
// import { useGLTF } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";

// export default function Laptop(props) {
//   const { nodes, materials } = useGLTF("/models/laptop-transformed.glb");

//   const modelRef = useRef();

//   useFrame((state, delta, xrFrame) => {
//     modelRef.current.position.y =
//       -0.12 + Math.sin(state.clock.elapsedTime) * 0.15;
//   });
//   return (
//     <group
//       {...props}
//       dispose={null}
//       ref={modelRef}
//       position={[0, -0.12, 0]}
//       scale={[0.01, 0.01, 0.01]}
//       rotation={[0.8, -0.5, 0]}
//     >
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube000_Laptop_0.geometry}
//         material={materials.Laptop}
//         position={[133.663, 0, -42.445]}
//         rotation={[-Math.PI / 2, 0, -0.351]}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.Cube002_Keys_0.geometry}
//         material={materials.Keys}
//         position={[-88.874, 0, 54.171]}
//         rotation={[-Math.PI / 2, 0, 0.41]}
//       />
//     </group>
//   );
// }

// useGLTF.preload("/models/laptop-transformed.glb");

// Modelo con Rotacion sobre su eje

"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Laptop(props) {
  const { nodes, materials } = useGLTF("/models/laptop-transformed.glb");
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Modifica la rotación del grupo en función del tiempo
    groupRef.current.rotation.y += delta * 0.5; // Modifica la velocidad de rotación aquí
  });

  return (
    <group
      {...props}
      dispose={null}
      position={[0, 0, 0]}
      scale={[0.010, 0.010, 0.010]}
      rotation={[0.30, 0.50, 0]}
      ref={groupRef} // Referencia al grupo para acceder a su rotación
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube000_Laptop_0.geometry}
        material={materials.Laptop}
        position={[133.663, 0, -42.445]}
        rotation={[-Math.PI / 2, 0, -0.351]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_Keys_0.geometry}
        material={materials.Keys}
        position={[-88.874, 0, 54.171]}
        rotation={[-Math.PI / 2, 0, 0.41]}
      />
    </group>
  );
}

useGLTF.preload("/models/laptop-transformed.glb");
