/* eslint-disable no-restricted-globals */

import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { Float32BufferAttribute } from "three";
import texture from './texture/globe.jpg'
import {Container, PlanetBg, PlanetContent} from './PlanetElements'

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

        const renderer = new THREE.WebGL1Renderer({
            antialias: true,
            canvas: document.querySelector('canvas')
        })
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        // document.body.appendChild(renderer.domElement)

        
        // create a sphere
   
        const sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 50, 50, 0, Math.PI * 2, 0, Math.PI * 2),
       
        new THREE.MeshBasicMaterial({
            
            map: new THREE.TextureLoader().load(texture),
            // color: 0x693AE1,
            blending: THREE.AdditiveBlending,
            side: THREE.BackSide
           
        }))


        scene.add(sphere)
     
        const starGeometry = new THREE.BufferGeometry()
        const starMaterial = new THREE.PointsMaterial({
            color: 0xFFFFFF
        })

        const starVertices = []
         for(let i = 0 ; i < 10000; i++){
             const x = (Math.random() - 0.5) * 2000
             const y = (Math.random() - 0.5) * 2000
             const z = -Math.random() * 2000
             starVertices.push(x, y , z)
         }

         starGeometry.setAttribute('position', new Float32BufferAttribute(starVertices, 3))
        const stars = new THREE.Points(
            starGeometry, starMaterial)

        scene.add(stars)
        camera.position.z = 12

        const mouse = {
            x: undefined,
            y: undefined
        }

function animate(){
    requestAnimationFrame(animate)
    sphere.rotation.y += 0.001;
    sphere.rotation.x = -mouse.y * 0.1
    renderer.render(scene, camera)
}

animate()
        // === THREE.JS EXAMPLE CODE END ===
   
    addEventListener('mousemove', () => {
        mouse.x = (event.clientX / innerWidth) * 2 - 1
        mouse.y = -(event.clientY / innerHeight) * 2 + 1
    })

    }
    render(){
        return (
            <>
                 <PlanetBg>

                </PlanetBg>
                
                 
                
           
            </>
        )
    }
}

export default Planet
