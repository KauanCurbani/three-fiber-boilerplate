import React from 'react'

function PointLight({ position, color, intensity }) {
  return (
    <pointLight castShadow position={position} color={color ?? 0xfff} intensity={intensity ?? 1}>
      <mesh>
        <sphereGeometry args={[0.15]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </pointLight>
  )
}

export default PointLight
