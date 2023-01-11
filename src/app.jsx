import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import { Stats, Environment, Center, OrbitControls } from '@react-three/drei'
import Button from './Button'

const vec = new Vector3()

function Rig() {
  return useFrame(({ camera, mouse }) => {
    vec.set(mouse.x * 2, mouse.y * 2, camera.position.z)
    camera.position.lerp(vec, 0.025)
    camera.lookAt(0, 0, 0)
  })
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Environment files="./hdr/carpentry_shop_01_1k.hdr" background />
      <Center>
        {[...Array(5).keys()].map((x) =>
          [...Array(3).keys()].map((y) => (
            <Button key={x + y * 5} position={[x * 10.5, y * 10.5, 0]} />
          ))
        )}
      </Center>
      {/* <Rig /> */}
      <OrbitControls  />

      <Stats />
    </Canvas>
  )
}
