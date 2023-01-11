import { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MathUtils } from 'three'
import { Color } from 'three'
import { OrbitControls } from '@react-three/drei'

const black = new Color('transparent')
export default function Button(props) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const [selected, setSelected] = useState(false)
  const colorTo = useMemo(() => new Color(Math.floor(Math.random() * 1677721600)), [])

  useFrame(() => {
    ref.current.rotation.x = hovered
      ? MathUtils.lerp(ref.current.rotation.x, -Math.PI * 2, 0.025)
      : MathUtils.lerp(ref.current.rotation.x, 0, 0.025)

    ref.current.position.z = selected
      ? MathUtils.lerp(ref.current.position.z, 0, 0.025)
      : MathUtils.lerp(ref.current.position.z, -5, 0.025)

    ref.current.material.color.lerp(selected ? colorTo : black, 0.025)
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => {
        setSelected(!selected)
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}>
      <sphereGeometry args={[5]} wireframe />
      <meshPhysicalMaterial
        roughness={0}
        metalness={0}
        thickness={1.12}
        ior={1.74}
        transmission={1.0}
      />
    </mesh>
  )
}
