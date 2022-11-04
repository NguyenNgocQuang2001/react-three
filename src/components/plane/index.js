

function Plane() {

    return (

        <mesh position={[1, 2, 3]} rotation={[1, 1, 0]}>
			<planeBufferGeometry attach="geometry" args={[15, 15]}/>
			<meshPhongMaterial attach="material" color="#123456" />
        </mesh>
    )
}

export default Plane