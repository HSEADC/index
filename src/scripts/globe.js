// src/scripts/globe.js
import * as THREE from 'three'

export default function initGlobe() {
  const canvas = document.querySelector('.threejs-canvas')
  if (!canvas) {
    console.warn('Canvas element not found. Globe initialization aborted.')
    return
  }

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    40,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  )
  camera.position.z = 2

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.setPixelRatio(window.devicePixelRatio)

  const geometry = new THREE.SphereGeometry(1, 64, 64)
  const material = new THREE.MeshBasicMaterial({
    color: 0x222222,
    wireframe: true
  })
  const globeMesh = new THREE.Mesh(geometry, material)
  scene.add(globeMesh)

  let mouseX = 0
  let mouseY = 0
  let targetX = 0
  let targetY = 0

  const rotationSpeed = 0.0009
  const followSpeed = 0.00009

  function onDocumentMouseMove(event) {
    mouseX = event.clientX - window.innerWidth / 2
    mouseY = event.clientY - window.innerHeight / 2
  }

  document.addEventListener('mousemove', onDocumentMouseMove)

  function onWindowResize() {
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  }
  window.addEventListener('resize', onWindowResize)

  function animate() {
    requestAnimationFrame(animate)

    targetX = mouseX * followSpeed
    targetY = mouseY * followSpeed

    globeMesh.rotation.y += rotationSpeed + targetX
    globeMesh.rotation.x += targetY * 0.5

    renderer.render(scene, camera)
  }

  animate()
}
