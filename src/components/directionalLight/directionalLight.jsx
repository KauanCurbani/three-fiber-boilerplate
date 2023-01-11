import React from 'react'

function DirectionalLight({ position, color, intensity }) {
  return (
    <directionalLight position={position} color={color ?? 0xfff} intensity={intensity ?? 1} castShadow>
      <mesh>
        <sphereGeometry args={[0.15]} />
      </mesh>
    </directionalLight>
  )
}

export default DirectionalLight
