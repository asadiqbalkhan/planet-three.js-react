/* eslint-disable no-restricted-globals */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";

class Planet extends Component {
    componentDidMount() {
        // === THREE.JS CODE START ===
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            innerWidth / innerHeight,
            0.1,
            1000
        )

        const renderer = new THREE.WebGL1Renderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        document.body.appendChild(renderer.domElement)
        
        // create a sphere
        const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50),
        new THREE.MeshBasicMaterial({
            color: 0xFF0000
        }))

        scene.add(sphere)

        camera.position.z = 12
        


function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()
        // === THREE.JS EXAMPLE CODE END ===
    }
    render(){
        return (
            <>
             
            </>
        )
    }
}

export default Planet
