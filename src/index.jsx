import './style.css'

import { Suspense } from 'react';
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <Canvas
            className={'r3f'}
            camera={ {
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [ -3, 1.5, 4 ]
            } }
        >
            <Suspense fallback={null}>
                <Experience />
            </Suspense>
        </Canvas>
        <Loader />
    </>
)
