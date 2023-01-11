import { useRef, useState, useEffect, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Box(props) {
  const ref = useRef()
  const [count, setCount] = useState(0)
  const geometry = useMemo(() => [new THREE.BoxGeometry(), new THREE.SphereGeometry(0.735398)], [])

  useEffect(() => {
    console.log(ref.current.geometry.uuid)
  })

  useFrame((_, delta) => {
    ref.current.rotation.x += Math.sin(_.clock.getElapsedTime()) * 3 * delta
    ref.current.rotation.y += Math.sin(_.clock.getElapsedTime()) * 2 * delta
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => setCount((count + 1) % 2)}
      geometry={geometry[count]}
      receiveShadow
      castShadow
      >
      <meshBasicMaterial color={'lime'} wireframe />
    </mesh>
  )
}
