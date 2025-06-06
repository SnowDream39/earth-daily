<template>
  <div></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const props = defineProps({
  containerSelector: {
    type: String,
    required: true,
  },
})

let scene, camera, renderer, earthMesh, animationId

onMounted(() => {
  const container = document.querySelector(props.containerSelector)
  if (!container) {
    console.error('容器不存在:', props.containerSelector)
    return
  }

  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  )
  camera.position.z = 3

  //背景设置
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(container.clientWidth, container.clientHeight)
  container.appendChild(renderer.domElement)
  //大小
  const geometry = new THREE.SphereGeometry(1, 64, 64)
  const textureLoader = new THREE.TextureLoader()
  const earthTexture = textureLoader.load('globe.jpg')
  earthTexture.minFilter = THREE.LinearMipmapLinearFilter
  earthTexture.magFilter = THREE.LinearFilter
  earthTexture.generateMipmaps = true

  const material = new THREE.MeshStandardMaterial({
    map: earthTexture,
    roughness: 1,
    metalness: 0,
  })

  earthMesh = new THREE.Mesh(geometry, material)
  scene.add(earthMesh)
  //环境光
  const ambientLight = new THREE.AmbientLight(0x333333,0.3)
  scene.add(ambientLight)

  //方向光
  const directionalLight = new THREE.DirectionalLight(0xffffff, 3.5)
  directionalLight.position.set(-5, 3, 5)
  scene.add(directionalLight)

  window.addEventListener('resize', onWindowResize)

  function animate() {
    animationId = requestAnimationFrame(animate)
    earthMesh.rotation.y += 0.001
    renderer.render(scene, camera)
  }
  animate()

  function onWindowResize() {
    if (!container) return
    camera.aspect = container.clientWidth / container.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(container.clientWidth, container.clientHeight)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize)
  cancelAnimationFrame(animationId)
  if (renderer) {
    renderer.dispose()
    if (renderer.domElement?.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement)
    }
  }
})
</script>

<style scoped>

</style>