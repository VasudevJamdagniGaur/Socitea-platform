import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/** Lightweight ambient particle field matching the Morphos dark/purple look. */
export function ParticleField() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100)
    camera.position.z = 6

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    const count = 1800
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const color = new THREE.Color('#B380DD')
    const white = new THREE.Color('#fffeff')

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 14
      positions[i3 + 1] = (Math.random() - 0.5) * 10
      positions[i3 + 2] = (Math.random() - 0.5) * 10
      const c = Math.random() > 0.82 ? white : color
      colors[i3] = c.r
      colors[i3 + 1] = c.g
      colors[i3 + 2] = c.b
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.025,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = mount
      camera.aspect = w / Math.max(h, 1)
      camera.updateProjectionMatrix()
      renderer.setSize(w, h, false)
    }
    resize()

    let frame = 0
    let raf = 0
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const tick = () => {
      frame += 1
      if (!reduceMotion) {
        points.rotation.y = frame * 0.0007
        points.rotation.x = Math.sin(frame * 0.0004) * 0.08
      }
      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div className="particle-layer" ref={mountRef} aria-hidden="true" />
}
