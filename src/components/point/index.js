import { useMemo } from 'react'
import * as THREE from 'three'
import circleImg from "../../asset/circle.png"
import { useLoader } from '@react-three/fiber'

function Points( { count, ax, ay, az } ) {
    const CircleImg = useLoader(THREE.TextureLoader, circleImg);
    let positions = useMemo(() => {
        let positions = [];
        for (let i = -count; i <= count; i++) {
            
            let y = ax ? 0 : i
            let z = ay ? 0 : i
            let x = az ? 0 : i
            positions.push(x, y, z);
        }
        return new Float32Array(positions);
    });
    return (
        <points>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={positions.length / 3} 
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                attach="material"
                map={CircleImg}
                color={0x00aaff}
                size={0.1}
            />
        </points>
    );
}

export default Points