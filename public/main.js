/* eslint-disable no-restricted-globals */
// Option 1: Import the entire three.js core library.
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000
)

const renderer = new THREE.WebGL1Renderer()
renderer.setSize(innerWidth, innerHeight)
document.body.apendChild(renderer.domElement)

// create a sphere
const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50),
 new THREE.MeshBasicMaterial({
    color: 0xFF0000
}))

//console.log(sphere)

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()