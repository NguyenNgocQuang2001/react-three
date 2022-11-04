import { useMemo } from 'react'
import * as THREE from 'three'
import circleImg from "../../asset/circle.png"
import { useLoader } from '@react-three/fiber'

function Points( { } ) {
    const CircleImg = useLoader(THREE.TextureLoader, circleImg);
    const count = 10;
    const sep = 3;
    let positions = useMemo(() => {
        let positions = [];
        for (let xi = -count; xi <= count; xi++) {
            
            let y = 0
            let z = 0
            let x = xi
            positions.push(x, y, z);
        }
        return new Float32Array(positions);
    }, [count, sep]); 
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
                sizeAttenuation
                transparent={false}
                alphaTest={0.5}
                opacity={1.0}
                size={0.2}
            />
        </points>
    );
}

export default Points