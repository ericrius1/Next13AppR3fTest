'use client'

import { useRouter } from 'next/navigation'
import { useCursor } from '@react-three/drei'
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'

export const Spell = ({ route = '/', ...props }) => {
  const router = useRouter()

  const meshRef = useRef()

  const [hovered, hover] = useState(false)

  useCursor(hovered)

  return (
    <group {...props}>
      {/* @ts-ignore */}
      <motion.mesh
        animate={{
          scale: 2,
          transition: { duration: 0.35 },
        }}
        onClick={() => router.push(route)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshPhysicalMaterial roughness={0} color={hovered ? 'purple' : 'green'} />
      </motion.mesh>
    </group>
  )
}
